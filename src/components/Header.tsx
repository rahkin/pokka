import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { usePokkaBalance } from '../hooks/usePokkaBalance'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #1a1a1a;
  border-bottom: 1px solid #333;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #0cf;
    }
  }
`

const CustomConnectButton = styled.button`
  background: #333;
  border: 1px solid #0cf;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: inherit;
  font-size: 1rem;

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
    gap: 0.3rem;
  }

  &:hover {
    background: #444;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;

    @media (max-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
`

const BalanceDisplay = styled.span`
  color: #0cf;
  margin-right: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`

const Header = () => {
  const { address } = useAccount()
  const balance = usePokkaBalance(address)

  return (
    <HeaderContainer>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/games">Games</Link>
        <Link to="/profile">Profile</Link>
      </Nav>
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openConnectModal,
          mounted,
        }) => {
          const ready = mounted
          const connected = ready && account && chain

          return (
            <div
              {...(!ready && {
                'aria-hidden': true,
                style: {
                  opacity: 0,
                  pointerEvents: 'none',
                  userSelect: 'none',
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <CustomConnectButton onClick={openConnectModal}>
                      Connect Wallet
                    </CustomConnectButton>
                  )
                }

                return (
                  <CustomConnectButton onClick={openAccountModal}>
                    {account.ensAvatar && (
                      <img src={account.ensAvatar} alt={account.displayName} />
                    )}
                    <BalanceDisplay>{Number(balance).toFixed(2)} POKKA</BalanceDisplay>
                    {account.displayName}
                  </CustomConnectButton>
                )
              })()}
            </div>
          )
        }}
      </ConnectButton.Custom>
    </HeaderContainer>
  )
}

export default Header 