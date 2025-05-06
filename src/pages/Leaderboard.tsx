import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import styled from 'styled-components';
import { GameLeaderboard, LeaderboardEntry, GameScore } from '../types';
import { collection, query, orderBy, limit, getDocs, where, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
import { db } from '../config/firebase';

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

const UserRow = styled.tr<{ isCurrentUser: boolean }>`
  background: ${props => props.isCurrentUser ? 'rgba(0, 240, 255, 0.1)' : 'transparent'};
  font-weight: ${props => props.isCurrentUser ? '600' : 'normal'};
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

const Leaderboard = () => {
  const { address } = useAccount();
  const [leaderboards, setLeaderboards] = useState<GameLeaderboard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboards = async () => {
      try {
        const leaderboardData: GameLeaderboard[] = [];

        for (const game of GAMES) {
          console.log(`Fetching scores for game: ${game.id}`);
          // Fetch top 10 scores
          const scoresRef = collection(db, 'scores');
          const q = query(
            scoresRef,
            where('gameId', '==', game.id),
            orderBy('score', 'desc'),
            limit(10)
          );
          
          const snapshot = await getDocs(q);
          console.log(`Found ${snapshot.size} scores for ${game.id}`);
          const topScores: LeaderboardEntry[] = [];
          
          snapshot.forEach((doc: QueryDocumentSnapshot) => {
            const data = doc.data() as GameScore;
            console.log(`Score data for ${game.id}:`, data);
            topScores.push({
              ...data,
              rank: topScores.length + 1,
              isCurrentUser: data.userId === address,
            } as LeaderboardEntry);
          });

          // Fetch user's rank if not in top 10
          let userRank: number | undefined;
          if (address) {
            console.log(`Fetching user rank for ${address} in ${game.id}`);
            const userScoreQuery = query(
              scoresRef,
              where('gameId', '==', game.id),
              where('userId', '==', address)
            );
            const userScoreSnapshot = await getDocs(userScoreQuery);
            
            if (!userScoreSnapshot.empty) {
              const userScore = userScoreSnapshot.docs[0].data().score;
              console.log(`User score for ${game.id}:`, userScore);
              const higherScoresQuery = query(
                scoresRef,
                where('gameId', '==', game.id),
                where('score', '>', userScore)
              );
              const higherScoresSnapshot = await getDocs(higherScoresQuery);
              userRank = higherScoresSnapshot.size + 1;
              console.log(`User rank for ${game.id}:`, userRank);
            }
          }

          leaderboardData.push({
            gameId: game.id,
            gameName: game.name,
            topScores,
            userRank,
          });
        }

        console.log('Final leaderboard data:', leaderboardData);
        setLeaderboards(leaderboardData);
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
                <UserRow key={entry.userId} isCurrentUser={entry.isCurrentUser}>
                  <TableCell>#{entry.rank}</TableCell>
                  <TableCell>{entry.username}</TableCell>
                  <TableCell>{entry.score}</TableCell>
                </UserRow>
              ))}
            </tbody>
          </ScoreTable>
          {gameLeaderboard.userRank && gameLeaderboard.userRank > 10 && (
            <UserRank>
              Your Rank: #{gameLeaderboard.userRank}
            </UserRank>
          )}
        </GameSection>
      ))}
    </LeaderboardContainer>
  );
};

export default Leaderboard; 