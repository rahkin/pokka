import { useAccount, useReadContract } from 'wagmi'
import { formatUnits } from 'viem'
import styled from 'styled-components'
import { tokenABI } from '../config/abi'
import { useUsername } from '../hooks/useUsername'
import { useState } from 'react'

export default function Profile() {
  const { address } = useAccount()
  const { username, setUsername, checkUsernameAvailable } = useUsername()
  const [isEditing, setIsEditing] = useState(false)
  const [newUsername, setNewUsername] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isChecking, setIsChecking] = useState(false)
  let balance = '0.00'

  const { data } = useReadContract({
    address: '0xb82f36fb31bF0Be873879C031DE4150d40AfDda9',
    abi: tokenABI,
    functionName: 'balanceOf',
    args: [address as `0x${string}`],
    query: {
      enabled: Boolean(address)
    }
  })

  if (data) {
    balance = formatUnits(data as bigint, 18)
  }

  const handleUsernameSubmit = async () => {
    if (!newUsername.trim()) {
      setError('Please enter a username')
      return
    }

    try {
      setIsChecking(true)
      setError(null)

      // Check if username is available
      const isAvailable = await checkUsernameAvailable(newUsername)
      if (!isAvailable) {
        setError('Username is already taken')
        return
      }

      // Set the username
      await setUsername(newUsername)
      setIsEditing(false)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to set username')
    } finally {
      setIsChecking(false)
    }
  }

  return (
    <Container>
      <h2>Your Profile</h2>
      
      <Section>
        <h3>Username</h3>
        {isEditing ? (
          <UsernameForm>
            <Input
              type="text"
              placeholder="Enter username"
              value={newUsername}
              onChange={e => setNewUsername(e.target.value)}
              maxLength={20}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <ButtonGroup>
              <Button variant="secondary" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button
                onClick={handleUsernameSubmit}
                disabled={isChecking || !newUsername.trim()}
              >
                {isChecking ? 'Checking...' : 'Save'}
              </Button>
            </ButtonGroup>
          </UsernameForm>
        ) : (
          <UsernameDisplay>
            <span>{username || 'No username set'}</span>
            <EditButton onClick={() => {
              setNewUsername(username || '')
              setIsEditing(true)
            }}>
              {username ? 'Change Username' : 'Set Username'}
            </EditButton>
          </UsernameDisplay>
        )}
      </Section>

      <Section>
        <h3>Wallet Address</h3>
        <Address>{address || 'Not connected'}</Address>
      </Section>

      <Section>
        <h3>POKKA Balance</h3>
        <Balance>{balance} POKKA</Balance>
      </Section>

      <Section>
        <h3>Get More POKKA</h3>
        <TradeButton
          href="https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0xb82f36fb31bF0Be873879C031DE4150d40AfDda9"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trade on PancakeSwap
        </TradeButton>
      </Section>
    </Container>
  )
}

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;

  h2 {
    color: var(--pokka-cyan);
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
  }
`

const Section = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid var(--pokka-cyan);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;

  h3 {
    color: var(--pokka-orange);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`

const Address = styled.div`
  font-family: monospace;
  background: rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 8px;
  word-break: break-all;
`

const Balance = styled.div`
  font-size: 2rem;
  color: var(--pokka-cyan);
`

const TradeButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.6);
  color: var(--pokka-cyan);
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border: 1px solid var(--pokka-cyan);

  &:hover {
    background: rgba(0, 240, 255, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(0, 240, 255, 0.4);
  }
`

const UsernameForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const UsernameDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  color: var(--pokka-cyan);
`

const EditButton = styled.button`
  background: transparent;
  color: var(--pokka-orange);
  border: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid var(--pokka-cyan);
  border-radius: 6px;
  color: var(--pokka-white);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--pokka-orange);
  }
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  background: ${props => props.variant === 'secondary' ? 'transparent' : 'var(--pokka-cyan)'};
  color: ${props => props.variant === 'secondary' ? 'var(--pokka-cyan)' : 'black'};
  border: 2px solid var(--pokka-cyan);
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const ErrorMessage = styled.p`
  color: var(--pokka-orange);
  margin-top: 0.5rem;
  text-align: center;
` 