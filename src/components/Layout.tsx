import React, { useState, useEffect } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { useUsername } from '../hooks/useUsername'
import { UsernameModal } from './UsernameModal'
import styled from 'styled-components'

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-family: inherit;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.8);
  border-bottom: 1px solid var(--pokka-cyan);
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const Username = styled.span`
  color: var(--pokka-cyan);
  font-weight: 500;
`

const SetUsernameButton = styled.button`
  background: transparent;
  color: var(--pokka-orange);
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isConnected } = useAccount()
  const { username, isLoading } = useUsername()
  const [showUsernameModal, setShowUsernameModal] = useState(false)

  // Show username modal when user connects and doesn't have a username
  useEffect(() => {
    if (isConnected && !isLoading && !username) {
      setShowUsernameModal(true)
    }
  }, [isConnected, isLoading, username])

  return (
    <LayoutContainer>
      <Header>
        <UserInfo>
          {isConnected && !isLoading && username && (
            <Username>@{username}</Username>
          )}
          {isConnected && !isLoading && (
            <SetUsernameButton onClick={() => setShowUsernameModal(true)}>
              {username ? 'Change Username' : 'Set Username'}
            </SetUsernameButton>
          )}
        </UserInfo>
        <ConnectButton />
      </Header>

      <Main>{children}</Main>

      <UsernameModal
        isOpen={showUsernameModal}
        onClose={() => setShowUsernameModal(false)}
      />
    </LayoutContainer>
  )
}

export { LayoutContainer, Main } 