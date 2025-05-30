import { SCORE_LABEL } from "./formatScore";

interface HoleScore {
  score: number;
  label: string;
}

export function saveHoleScore(holeScore: HoleScore, courseScore: HoleScore[]) {
  return [...courseScore, holeScore];
}
