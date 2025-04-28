import React from 'react'
import { useAccount, useReadContract } from 'wagmi'
import { formatUnits } from 'viem'
import styled from 'styled-components'

const POKKA_TOKEN_ADDRESS = '0xb82f36fb31bF0Be873879C031DE4150d40AfDda9'
const MIN_BALANCE = 1000n
const ERC20_ABI = [
  {
    constant: true,
    inputs: [{ name: 'owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
    type: 'function',
  },
]

const TokenGate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { address, isConnected } = useAccount()
  const { data, isLoading } = useReadContract({
    address: POKKA_TOKEN_ADDRESS,
    abi: ERC20_ABI,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    enabled: !!address,
  })

  let hasEnoughTokens = false
  if (data) {
    const balance = BigInt(data)
    hasEnoughTokens = balance >= MIN_BALANCE * 10n ** 18n
  }

  if (isLoading) {
    return <LoadingContainer>Checking token balance...</LoadingContainer>
  }

  if (!isConnected || !hasEnoughTokens) {
    return (
      <GateContainer>
        <h2>Access Restricted</h2>
        <p>You need at least 1000 POKKA tokens to access this content.</p>
        <p>
          Get POKKA tokens on{' '}
          <a
            href="https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0xb82f36fb31bF0Be873879C031DE4150d40AfDda9"
            target="_blank"
            rel="noopener noreferrer"
          >
            PancakeSwap
          </a>
        </p>
      </GateContainer>
    )
  }

  return <>{children}</>
}

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 1.2rem;
  color: var(--pokka-cyan);
`

const GateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  color: var(--pokka-white);

  h2 {
    color: var(--pokka-orange);
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: var(--pokka-cyan);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export default TokenGate 