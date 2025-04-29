import React, { useState } from 'react'
import styled from 'styled-components'
import { useUsername } from '../hooks/useUsername'

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalContent = styled.div`
  background: rgba(0, 0, 0, 0.9);
  border: 2px solid var(--pokka-cyan);
  border-radius: 12px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  font-family: 'One Little Font', sans-serif;
`

const Title = styled.h2`
  color: var(--pokka-cyan);
  margin-bottom: 1.5rem;
  text-align: center;
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid var(--pokka-cyan);
  border-radius: 6px;
  color: var(--pokka-white);
  font-family: 'One Little Font', sans-serif;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--pokka-orange);
  }
`

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  background: ${props => props.variant === 'secondary' ? 'transparent' : 'var(--pokka-cyan)'};
  color: ${props => props.variant === 'secondary' ? 'var(--pokka-cyan)' : 'black'};
  border: 2px solid var(--pokka-cyan);
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  font-family: 'One Little Font', sans-serif;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  margin: 0 0.5rem;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 1rem;
`

const ErrorMessage = styled.p`
  color: var(--pokka-orange);
  margin-top: 0.5rem;
  text-align: center;
`

interface UsernameModalProps {
  isOpen: boolean
  onClose: () => void
}

export const UsernameModal: React.FC<UsernameModalProps> = ({ isOpen, onClose }) => {
  const { setUsername, checkUsernameAvailable } = useUsername()
  const [inputUsername, setInputUsername] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isChecking, setIsChecking] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async () => {
    if (!inputUsername.trim()) {
      setError('Please enter a username')
      return
    }

    try {
      setIsChecking(true)
      setError(null)

      // Check if username is available
      const isAvailable = await checkUsernameAvailable(inputUsername)
      if (!isAvailable) {
        setError('Username is already taken')
        return
      }

      // Set the username
      await setUsername(inputUsername)
      onClose()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to set username')
    } finally {
      setIsChecking(false)
    }
  }

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <Title>Choose Your Username</Title>
        <Input
          type="text"
          placeholder="Enter username"
          value={inputUsername}
          onChange={e => setInputUsername(e.target.value)}
          maxLength={20}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonGroup>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={isChecking || !inputUsername.trim()}
          >
            {isChecking ? 'Checking...' : 'Set Username'}
          </Button>
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  )
} 