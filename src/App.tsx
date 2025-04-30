import { Routes, Route } from 'react-router-dom'
import { WagmiProvider } from 'wagmi'
import { bsc } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  RainbowKitProvider,
  darkTheme,
  getDefaultConfig,
} from '@rainbow-me/rainbowkit'
import { http } from 'viem'
import '@rainbow-me/rainbowkit/styles.css'
import Home from './pages/Home'
import Games from './pages/Games'
import Profile from './pages/Profile'
import TokenGate from './components/TokenGate'
import Header from './components/Header'

const projectId = '5d64ede87e7217f25b3f1fc4b04f451b'

const config = getDefaultConfig({
  appName: 'Pokka Games',
  projectId,
  chains: [bsc],
  transports: {
    [bsc.id]: http(),
  },
})

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: '#00f0ff', // var(--pokka-cyan)
            accentColorForeground: 'black',
          })}
        >
          <div className="app">
            <Header />
            <TokenGate>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Games />} />
                <Route path="/games/:gameId" element={<Games />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </TokenGate>
          </div>
        </RainbowKitProvider>
      </WagmiProvider>
    </QueryClientProvider>
  )
}

export default App 