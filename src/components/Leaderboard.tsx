import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { subscribeToLeaderboard } from '../utils/scoreTracking';
import { useAccount } from 'wagmi';
import { db } from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore';

interface Score {
  address: string;
  score: number;
  timestamp: number;
  username?: string;
}

interface LeaderboardProps {
  gameId: string;
  limit?: number;
}

const LeaderboardContainer = styled.div`
  background: rgba(0, 0, 0, 0.8);
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid var(--pokka-cyan);
  width: 300px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h3`
  color: var(--pokka-cyan);
  margin-bottom: 0.5rem;
  text-align: center;
  font-size: 1.1em;
`;

const ScoreList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
`;

const ScoreItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0.5rem;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9em;

  &:last-child {
    border-bottom: none;
  }
`;

const Address = styled.span`
  color: var(--pokka-cyan);
`;

const Score = styled.span`
  font-weight: bold;
`;

const ErrorMessage = styled.div`
  color: var(--pokka-orange);
  text-align: center;
  padding: 1rem;
`;

const LoadingMessage = styled.div`
  color: var(--pokka-cyan);
  text-align: center;
  padding: 1rem;
`;

export const Leaderboard: React.FC<LeaderboardProps> = ({ gameId, limit = 10 }) => {
  const [scores, setScores] = useState<Score[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { address: currentUserAddress } = useAccount();

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    try {
      unsubscribe = subscribeToLeaderboard(
        gameId,
        limit,
        async (newScores) => {
          setIsLoading(false);
          if (Array.isArray(newScores)) {
            // Filter out invalid scores and ensure required properties exist
            const validScores = newScores.filter(
              (score): score is Score =>
                score &&
                typeof score === 'object' &&
                typeof score.address === 'string' &&
                typeof score.score === 'number' &&
                typeof score.timestamp === 'number'
            );

            // Fetch usernames for all scores
            const scoresWithUsernames = await Promise.all(
              validScores.map(async (score) => {
                try {
                  const userDoc = await getDoc(doc(db, 'usernames', score.address));
                  return {
                    ...score,
                    username: userDoc.exists() ? userDoc.data().username : null
                  };
                } catch (err) {
                  console.error('Error fetching username:', err);
                  return score;
                }
              })
            );

            setScores(scoresWithUsernames);
          } else {
            setScores([]);
          }
          setError(null);
        }
      );
    } catch (err) {
      setIsLoading(false);
      setError('Failed to load leaderboard. Please try again later.');
      console.error('Leaderboard error:', err);
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [gameId, limit]);

  const renderContent = () => {
    if (error) {
      return <ErrorMessage>{error}</ErrorMessage>;
    }

    if (isLoading) {
      return <LoadingMessage>Loading scores...</LoadingMessage>;
    }

    if (scores.length === 0) {
      return (
        <ScoreItem>
          <span>No scores yet</span>
        </ScoreItem>
      );
    }

    return scores.map((score, index) => {
      // Determine display name: username or truncated address
      const displayName = score.username 
        ? `@${score.username}` 
        : `${score.address.slice(0, 5)}...${score.address.slice(-5)}`;
        
      // Check if the current score belongs to the connected wallet
      const isCurrentUser = currentUserAddress && score.address.toLowerCase() === currentUserAddress.toLowerCase();

      return (
        <ScoreItem key={`${score.address}-${score.timestamp}`}>
          <Address>
            {index + 1}. {displayName}
            {isCurrentUser && ' (You)'}
          </Address>
          <Score>{score.score}</Score>
        </ScoreItem>
      );
    });
  };

  return (
    <LeaderboardContainer>
      <Title>Leaderboard</Title>
      <ScoreList>
        {renderContent()}
      </ScoreList>
    </LeaderboardContainer>
  );
}; 