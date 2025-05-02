import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import GameTiles from '../components/GameTiles'
import { PokkaManGame } from '../games/pokka-man/PokkaManGame'
import { PokkaSnakeGame } from '../games/pokka-snake/PokkaSnakeGame'
import { PokkaFallingBlocksGame } from '../games/pokka-falling-blocks/PokkaFallingBlocksGame'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--pokka-white);
  }

  p {
    font-size: 1.2rem;
    color: var(--pokka-cyan);
  }
`

const Games: React.FC = () => {
  const { gameId } = useParams()

  if (!gameId) {
    return (
      <Container>
        <Header>
          <h1>All Games</h1>
          <p>Choose a game to start playing and earning rewards!</p>
        </Header>
        <GameTiles />
      </Container>
    )
  }

  switch (gameId) {
      case 'pokka-man':
        return <PokkaManGame />
    case 'snakes':
      return <PokkaSnakeGame />
      case 'falling-blocks':
        return <PokkaFallingBlocksGame />
      default:
      return (
        <Container>
          <Header>
            <h1>Game Not Found</h1>
            <p>The game you're looking for doesn't exist.</p>
          </Header>
          <GameTiles />
        </Container>
      )
  }
}

export default Games 