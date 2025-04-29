import { Routes, Route } from 'react-router-dom'
import { WagmiConfig, createConfig, http } from 'wagmi'
import { bsc } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from './pages/Home'
import Games from './pages/Games'
import Profile from './pages/Profile'
import TokenGate from './components/TokenGate'
import Header from './components/Header'

const config = createConfig({
  chains: [bsc],
  transports: {
    [bsc.id]: http(),
  },
  connectors: [injected()],
})

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={config}>
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
      </WagmiConfig>
    </QueryClientProvider>
  )
}

export default App 