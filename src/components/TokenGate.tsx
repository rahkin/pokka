import React from 'react'
import { useAccount } from 'wagmi'
import styled from 'styled-components'
import { ConnectButton } from '@rainbow-me/rainbowkit'

interface TokenGateProps {
  children: React.ReactNode
}

const ConnectPrompt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: 2rem;
  text-align: center;
  padding: 2rem;
`

const Title = styled.h2`
  color: var(--pokka-cyan);
  font-size: 2rem;
  margin-bottom: 1rem;
`

const Description = styled.p`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
`

const TokenGate: React.FC<TokenGateProps> = ({ children }) => {
  const { address } = useAccount()

  if (!address) {
    return (
      <ConnectPrompt>
        <Title>Connect Your Wallet</Title>
        <Description>
          Connect your wallet to access Pokka Games and compete for high scores!
        </Description>
        <ConnectButton />
      </ConnectPrompt>
    )
  }

  return <>{children}</>
}

export default TokenGate 