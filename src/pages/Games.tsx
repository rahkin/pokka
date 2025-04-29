import React from 'react'
import styled from 'styled-components'
import GameTiles from '../components/GameTiles'

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

export default Games 