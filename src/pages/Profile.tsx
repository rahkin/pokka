import { useAccount, useReadContract } from 'wagmi'
import { formatUnits } from 'viem'
import styled from 'styled-components'
import { tokenABI } from '../config/abi'

export default function Profile() {
  const { address } = useAccount()
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

  return (
    <Container>
      <h2>Your Profile</h2>
      
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