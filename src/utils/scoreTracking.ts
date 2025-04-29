import { ref, set, get, onValue, off } from 'firebase/database';
import { database } from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

interface Score {
  address: string;
  score: number;
  timestamp: number;
  username?: string;
}

export const saveScore = async (gameId: string, address: string, score: number): Promise<void> => {
  try {
    // Get username from Firestore
    let username: string | null = null;
    try {
      const userDoc = await getDoc(doc(db, 'usernames', address));
      if (userDoc.exists()) {
        username = userDoc.data().username;
      }
    } catch (err) {
      console.error('Error fetching username:', err);
    }

    const scoreRef = ref(database, `scores/${gameId}/${address}`);
    await set(scoreRef, {
      address,
      score,
      timestamp: Date.now(),
      username
    });
  } catch (error) {
    console.error('Error saving score:', error);
    throw error;
  }
};

export const getLeaderboard = async (gameId: string): Promise<Score[]> => {
  try {
    const scoresRef = ref(database, `scores/${gameId}`);
    const snapshot = await get(scoresRef);
    const scores = snapshot.val() || {};
    
    return (Object.values(scores) as Score[])
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
  } catch (error) {
    console.error('Error getting leaderboard:', error);
    throw error;
  }
};

export const subscribeToLeaderboard = (
  gameId: string,
  limit: number,
  callback: (scores: Score[]) => void
): () => void => {
  const scoresRef = ref(database, `scores/${gameId}`);
  
  const handleScoreUpdate = (snapshot: any) => {
    const scores = snapshot.val() || {};
    const sortedScores = (Object.values(scores) as Score[])
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
    callback(sortedScores);
  };
  
  onValue(scoresRef, handleScoreUpdate);
  return () => off(scoresRef);
}; 