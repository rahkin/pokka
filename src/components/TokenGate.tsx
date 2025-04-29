import React from 'react'
import { useAccount } from 'wagmi'
import styled from 'styled-components'

const TokenGate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isConnected } = useAccount()

  if (!isConnected) {
    return (
      <GateContainer>
        <h2>Access Restricted</h2>
        <p>Please connect your wallet to access this content.</p>
      </GateContainer>
    )
  }

  return <>{children}</>
}

const GateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  padding: 20px;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  border: 1px solid var(--pokka-cyan);
  color: white;

  h2 {
    color: var(--pokka-cyan);
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 10px;
  }

  a {
    color: var(--pokka-cyan);
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`

export default TokenGate 