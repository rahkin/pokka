import { useReadContract } from 'wagmi'
import { formatUnits } from 'viem'
import { tokenABI } from '../config/abi'

export function usePokkaBalance(address: `0x${string}` | undefined) {
  const { data } = useReadContract({
    address: '0xb82f36fb31bF0Be873879C031DE4150d40AfDda9',
    abi: tokenABI,
    functionName: 'balanceOf',
    args: [address as `0x${string}`],
    query: {
      enabled: Boolean(address)
    }
  })

  const balance = data ? formatUnits(data as bigint, 18) : '0.00'
  return balance
} 