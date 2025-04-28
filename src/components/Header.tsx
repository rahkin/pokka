import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

const Header: React.FC = () => {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()

  const connectWallet = () => connect({ connector: connectors[0] })
  const disconnectWallet = () => disconnect()

  return (
    <HeaderContainer>
      <Logo to="/">
        <img src="/assets/images/pokka_header.png" alt="POKKA" />
      </Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/games">Games</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </Nav>
      <WalletButton
        onClick={isConnected ? disconnectWallet : connectWallet}
        $connected={isConnected}
      >
        {isConnected && address
          ? `${address.slice(0, 6)}...${address.slice(-4)}`
          : 'Connect Wallet'}
      </WalletButton>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.8);
  border-bottom: 1px solid var(--pokka-cyan);
`

const Logo = styled(Link)`
  img {
    height: 40px;
    width: auto;
  }
`

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`

const NavLink = styled(Link)`
  color: var(--pokka-white);
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--pokka-cyan);
  }
`

const WalletButton = styled.button<{ $connected?: boolean }>`
  padding: 0.5rem 1rem;
  border: 1px solid var(--pokka-cyan);
  border-radius: 8px;
  background: ${({ $connected }) =>
    $connected ? 'rgba(0, 240, 255, 0.1)' : 'transparent'};
  color: var(--pokka-cyan);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 240, 255, 0.2);
  }
`

export default Header 