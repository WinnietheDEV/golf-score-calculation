import { HoleScore } from "./saveHoleScore";

export enum SCORE_LABEL {
  ALBATROSS = "Albatross",
  EAGLE = "Eagle",
  BIRDIE = "Birdie",
  PAR = "Par",
  BOGEY = "Bogey",
  DOUBLE_BOGEY = "Double Bogey",
  TRIPLE_BOGEY = "Triple Bogey",
  QUADRUPLE_BOGEY = "Quadruple Bogey",
  QUINTUPLE_BOGEY = "Quintuple Bogey",
}

export function formatHoleScore(holeScore: number): HoleScore | string {
  if (holeScore < -3) {
    return "Hole score must be greater than or equal to -3";
  }

  switch (holeScore) {
    case -3:
      return { score: -3, label: SCORE_LABEL.ALBATROSS };
    case -2:
      return { score: -2, label: SCORE_LABEL.EAGLE };
    case -1:
      return { score: -1, label: SCORE_LABEL.BIRDIE };
    case 0:
      return { score: 0, label: SCORE_LABEL.PAR };
    case 1:
      return { score: 1, label: SCORE_LABEL.BOGEY };
    case 2:
      return { score: 2, label: SCORE_LABEL.DOUBLE_BOGEY };
    case 3:
      return { score: 3, label: SCORE_LABEL.TRIPLE_BOGEY };
    case 4:
      return { score: 4, label: SCORE_LABEL.QUADRUPLE_BOGEY };
    case 5:
      return { score: 5, label: SCORE_LABEL.QUINTUPLE_BOGEY };
    default:
      return { score: holeScore, label: holeScore.toString() };
  }
}
