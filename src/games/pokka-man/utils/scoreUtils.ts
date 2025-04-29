import { getDatabase, ref, set, get, query, orderByChild, limitToLast } from 'firebase/database';

interface ScoreEntry {
  address: string;
  score: number;
  timestamp: number;
}

export const submitScore = async (address: string, score: number) => {
  const db = getDatabase();
  const scoreRef = ref(db, `scores/pokka-man/${address}`);
  
  const scoreEntry: ScoreEntry = {
    address,
    score,
    timestamp: Date.now(),
  };

  try {
    await set(scoreRef, scoreEntry);
    console.log('Score submitted successfully');
  } catch (error) {
    console.error('Error submitting score:', error);
  }
};

export const getLeaderboard = async (limit: number = 10): Promise<ScoreEntry[]> => {
  const db = getDatabase();
  const scoresRef = ref(db, 'scores/pokka-man');
  const leaderboardQuery = query(scoresRef, orderByChild('score'), limitToLast(limit));

  try {
    const snapshot = await get(leaderboardQuery);
    if (snapshot.exists()) {
      const scores: ScoreEntry[] = [];
      snapshot.forEach((childSnapshot) => {
        scores.push(childSnapshot.val());
      });
      return scores.sort((a, b) => b.score - a.score);
    }
    return [];
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return [];
  }
}; 