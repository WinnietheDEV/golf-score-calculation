export interface HoleScore {
  score: number;
  name: string;
}

export function saveHoleScore(holeScore: HoleScore, courseScore: HoleScore[]) {
  return [...courseScore, holeScore];
}
