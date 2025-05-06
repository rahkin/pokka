export interface Game {
  id: string
  title: string
  description: string
  image: string
  url: string
  category: string
  tags: string[]
}

export interface GameScore {
  userId: string;
  username: string;
  score: number;
  gameId: string;
  timestamp: number;
}

export interface LeaderboardEntry extends GameScore {
  rank: number;
  isCurrentUser: boolean;
}

export interface GameLeaderboard {
  gameId: string;
  gameName: string;
  topScores: LeaderboardEntry[];
  userRank?: LeaderboardEntry;
} 