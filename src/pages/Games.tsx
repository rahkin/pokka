import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import styled from 'styled-components'
import { PokkaManGame } from '../games/pokka-man'
import { PokkaSnakeGame } from '../games/pokka-snake/PokkaSnakeGame'

const Games: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>()

  const renderGame = (id: string) => {
    switch (id) {
      case 'pokka-man':
        return <PokkaManGame />
      case 'falling-blocks':
        return <Navigate to="/games/pokka-falling-blocks/index.html" replace />
      case 'snakes':
        return <PokkaSnakeGame />
      default:
        return null
    }
  }

  const game = gameId ? renderGame(gameId) : null

  if (!game) {
    return <Navigate to="/" replace />
  }

  return (
    <GameContainer>
      {game}
    </GameContainer>
  )
}

const GameContainer = styled.div`
  width: 100%;
  height: calc(100vh - 80px); // Adjust based on your header height
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Games 