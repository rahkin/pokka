import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <Container>
      <Hero>
        <h1>Welcome to Pokka's Arcade Hub</h1>
        <p>Play exciting games and earn rewards!</p>
        <Note>
          Note: Not all games are optimized for mobile devices. For the best
          experience, please play on desktop.
        </Note>
      </Hero>

      <GamesGrid>
        <GameCard>
          <img src="/assets/images/pokka_header.png" alt="PokkaMan" />
          <h2>PokkaMan</h2>
          <p>Guide Pokka through the maze, collect dots, and avoid ghosts in this classic arcade-style game!</p>
          <PlayButton to="/games/pokka-man">Play Now</PlayButton>
        </GameCard>

        <GameCard>
          <img src="/assets/images/pokka_header.png" alt="Pokka's Falling Blocks" />
          <h2>Pokka's Falling Blocks</h2>
          <p>Stack and clear blocks in this addictive puzzle game. How high can you score?</p>
          <PlayButton to="/games/falling-blocks">Play Now</PlayButton>
        </GameCard>

        <GameCard>
          <img src="/assets/images/pokka_header.png" alt="Pokka's Snakes" />
          <h2>Pokka's Snakes</h2>
          <p>A modern take on the classic snake game with 3D graphics, power-ups, and special effects!</p>
          <PlayButton to="/games/snakes">Play Now</PlayButton>
        </GameCard>

        <ComingSoonCard>
          <img src="/assets/images/pokka_header.png" alt="Coming Soon" />
          <h2>More Games Coming Soon!</h2>
          <p>Stay tuned for more exciting games coming to Pokka's Arcade Hub.</p>
        </ComingSoonCard>
      </GamesGrid>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

const Hero = styled.div`
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

const Note = styled.p`
  color: var(--pokka-orange) !important;
  font-style: italic;
  margin-top: 1rem;
`

const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const GameCard = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid var(--pokka-cyan);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 30px rgba(0, 240, 255, 0.4);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(0, 240, 255, 0.3);
  }

  h2 {
    color: var(--pokka-cyan);
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
  }
`

const ComingSoonCard = styled(GameCard)`
  opacity: 0.7;
`

const PlayButton = styled(Link)`
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

export default Home 