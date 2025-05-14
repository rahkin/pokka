import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

const GameTiles: React.FC = () => {
  return (
    <GamesGrid>
      <GameCard>
        <img src="/assets/images/pokkaman_tile.png" alt="PokkaMan" />
        <h2>PokkaMan</h2>
        <p>Guide Pokka through the maze, collect dots, and avoid ghosts in this classic arcade-style game!</p>
        <PlayButton to="/games/pokka-man">Play Now</PlayButton>
      </GameCard>

      <GameCard>
        <img src="/assets/images/falling_blocks_tile.png" alt="Pokka's Falling Blocks" />
        <h2>Pokka's Falling Blocks</h2>
        <p>Stack and clear blocks in this addictive puzzle game. How high can you score?</p>
        <PlayButton to="/games/falling-blocks">Play Now</PlayButton>
      </GameCard>

      <GameCard>
        <img src="/assets/images/snakes_tile.png" alt="Pokka's Snakes" />
        <h2>Pokka's Snakes</h2>
        <p>A modern take on the classic snake game with 3D graphics, power-ups, and special effects!</p>
        <PlayButton to="/games/snakes">Play Now</PlayButton>
      </GameCard>

      <GameCard>
        <img src="/assets/images/bash_arena_tile.png" alt="Pokka's Bash Arena" />
        <h2>Pokka's Bash Arena</h2>
        <p>Hovercraft battle game! Bump opponents and collect power orbs. 3D multiplayer fun.</p>
        <PlayButton to="/games/pokkas-bash-arena">Play Now</PlayButton>
      </GameCard>

      <ComingSoonCard>
        <img src="/assets/images/pokka_header.png" alt="Coming Soon" />
        <h2>More Games Coming Soon!</h2>
        <p>Stay tuned for more exciting games coming to Pokka's Arcade Hub.</p>
      </ComingSoonCard>
    </GamesGrid>
  )
}

export default GameTiles 