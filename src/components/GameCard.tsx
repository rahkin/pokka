import { Game } from '../types'
import styled from 'styled-components'

interface GameCardProps {
  game: Game
  onClick: () => void
}

const Card = styled.div`
  background: #1a1a1a;
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-4px);
  }
`

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
`

const Title = styled.h3`
  color: #fff;
  margin: 0 0 8px 0;
  font-size: 1.2rem;
`

const Description = styled.p`
  color: #888;
  margin: 0;
  font-size: 0.9rem;
`

const GameCard: React.FC<GameCardProps> = ({ game, onClick }) => {
  return (
    <Card onClick={onClick}>
      <Image src={game.image} alt={game.title} />
      <Title>{game.title}</Title>
      <Description>{game.description}</Description>
    </Card>
  )
}

export default GameCard 