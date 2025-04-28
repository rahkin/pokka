import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import styled from 'styled-components'

const Games: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>()

  const getGameUrl = (id: string) => {
    switch (id) {
      case 'pokka-man':
        return '/games/pokka-man/index.html'
      case 'falling-blocks':
        return '/games/pokka-falling-blocks/index.html'
      case 'snakes':
        return '/games/pokka-snakes-gl/dist/index.html'
      default:
        return null
    }
  }

  const gameUrl = gameId ? getGameUrl(gameId) : null

  if (!gameUrl) {
    return <Navigate to="/" replace />
  }

  return (
    <GameContainer>
      <iframe
        src={gameUrl}
        title={`Pokka's ${gameId}`}
        frameBorder="0"
        allowFullScreen
      />
    </GameContainer>
  )
}

const GameContainer = styled.div`
  width: 100%;
  height: calc(100vh - 80px); // Adjust based on your header height
  padding: 1rem;

  iframe {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    border: 1px solid var(--pokka-cyan);
    background: rgba(0, 0, 0, 0.6);
  }
`

export default Games 