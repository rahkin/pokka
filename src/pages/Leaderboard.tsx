import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import styled from 'styled-components';
import { GameLeaderboard, LeaderboardEntry } from '../types';
import { ref, get, query, orderByChild, limitToLast } from 'firebase/database';
import { database } from '../config/firebase';

const LeaderboardContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const GameSection = styled.div`
  margin-bottom: 3rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
`;

const GameTitle = styled.h2`
  color: var(--pokka-cyan);
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

const ScoreTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 0.75rem;
  border-bottom: 2px solid var(--pokka-cyan);
  color: var(--pokka-cyan);
  font-weight: 600;
`;

const TableCell = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const LeaderboardRow = styled.tr<{ $isCurrentUser?: boolean }>`
  background-color: ${props => props.$isCurrentUser ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  font-weight: ${props => props.$isCurrentUser ? 'bold' : 'normal'};
  color: ${props => props.$isCurrentUser ? '#fff' : 'inherit'};
`;

const UserRank = styled.div`
  margin-top: 1rem;
  padding: 0.75rem;
  background: rgba(0, 240, 255, 0.05);
  border-radius: 8px;
  color: var(--pokka-cyan);
  font-weight: 500;
`;

const GAMES = [
  { id: 'pokka-falling-blocks', name: 'Pokka Falling Blocks' },
  { id: 'pokka-man', name: 'Pokka Man' },
  { id: 'pokka-snake', name: 'Pokka Snake' },
];

// Helper function to abbreviate wallet address
function abbreviateAddress(address?: string) {
  if (!address) return '';
  return address.slice(0, 6) + '...' + address.slice(-4);
}

const Leaderboard = () => {
  const { address } = useAccount();
  const [leaderboards, setLeaderboards] = useState<GameLeaderboard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboards = async () => {
      try {
        const leaderboards: GameLeaderboard[] = await Promise.all(
          GAMES.map(async (game) => {
            const scoresRef = ref(database, `scores/${game.id}`);
            const scoresSnapshot = await get(scoresRef);
            const scores: LeaderboardEntry[] = [];
            
            scoresSnapshot.forEach((childSnapshot) => {
              const scoreData = childSnapshot.val();
              scores.push({
                userId: childSnapshot.key!,
                username: scoreData.username,
                score: scoreData.score,
                gameId: game.id,
                timestamp: scoreData.timestamp,
                rank: 0,
                isCurrentUser: childSnapshot.key === address
              });
            });

            // Sort scores in descending order
            scores.sort((a, b) => b.score - a.score);

            // Add ranks
            scores.forEach((score, index) => {
              score.rank = index + 1;
            });

            // Get user's rank if not in top 10
            let userRank: LeaderboardEntry | undefined;
            if (address) {
              const userScore = scores.find(s => s.userId === address);
              if (userScore) {
                userRank = userScore;
              }
            }

            return {
              gameId: game.id,
              gameName: game.name,
              topScores: scores.slice(0, 10),
              userRank
            };
          })
        );

        setLeaderboards(leaderboards);
      } catch (error) {
        console.error('Error fetching leaderboards:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboards();
  }, [address]);

  if (loading) {
    return <LeaderboardContainer>Loading leaderboards...</LeaderboardContainer>;
  }

  return (
    <LeaderboardContainer>
      <h1>Leaderboards</h1>
      {leaderboards.map((gameLeaderboard) => (
        <GameSection key={gameLeaderboard.gameId}>
          <GameTitle>{gameLeaderboard.gameName}</GameTitle>
          <ScoreTable>
            <thead>
              <tr>
                <TableHeader>Rank</TableHeader>
                <TableHeader>Player</TableHeader>
                <TableHeader>Score</TableHeader>
              </tr>
            </thead>
            <tbody>
              {gameLeaderboard.topScores.map((entry) => (
                <LeaderboardRow 
                  key={entry.userId} 
                  $isCurrentUser={entry.isCurrentUser}
                >
                  <TableCell>#{entry.rank}</TableCell>
                  <TableCell>{entry.username && entry.username.trim() !== '' ? entry.username : abbreviateAddress(entry.userId)}</TableCell>
                  <TableCell>{entry.score}</TableCell>
                </LeaderboardRow>
              ))}
              {gameLeaderboard.userRank && (
                <>
                  <LeaderboardRow $isCurrentUser={true}>
                    <TableCell>#{gameLeaderboard.userRank.rank}</TableCell>
                    <TableCell>{gameLeaderboard.userRank.username && gameLeaderboard.userRank.username.trim() !== '' ? gameLeaderboard.userRank.username : abbreviateAddress(gameLeaderboard.userRank.userId)}</TableCell>
                    <TableCell>{gameLeaderboard.userRank.score}</TableCell>
                  </LeaderboardRow>
                </>
              )}
            </tbody>
          </ScoreTable>
          {gameLeaderboard.userRank && gameLeaderboard.userRank.rank > 10 && (
            <UserRank>
              Your Rank: #{gameLeaderboard.userRank.rank}
            </UserRank>
          )}
        </GameSection>
      ))}
    </LeaderboardContainer>
  );
};

export default Leaderboard; 