import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo to="/">POKKA</Logo>
      <Nav>
        <NavLink to="/games">Games</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <ConnectButton />
      </Nav>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  background: rgba(0, 0, 0, 0.8);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--pokka-cyan);
`

const Logo = styled(Link)`
  color: var(--pokka-cyan);
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
`

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--pokka-cyan);
  }
`

export default Header 