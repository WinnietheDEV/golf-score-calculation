import { HoleScore } from "../storage/saveHoleScore";

export enum SCORE_NAME {
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

export function formatHoleScore(holeScore: number): HoleScore {
  if (holeScore < -3) {
    throw new Error("Hole score must be greater than or equal to -3");
  }

  switch (holeScore) {
    case -3:
      return { score: holeScore, name: SCORE_NAME.ALBATROSS };
    case -2:
      return { score: holeScore, name: SCORE_NAME.EAGLE };
    case -1:
      return { score: holeScore, name: SCORE_NAME.BIRDIE };
    case 0:
      return { score: holeScore, name: SCORE_NAME.PAR };
    case 1:
      return { score: holeScore, name: SCORE_NAME.BOGEY };
    case 2:
      return { score: holeScore, name: SCORE_NAME.DOUBLE_BOGEY };
    case 3:
      return { score: holeScore, name: SCORE_NAME.TRIPLE_BOGEY };
    case 4:
      return { score: holeScore, name: SCORE_NAME.QUADRUPLE_BOGEY };
    case 5:
      return { score: holeScore, name: SCORE_NAME.QUINTUPLE_BOGEY };
    default:
      return { score: holeScore, name: `+${holeScore}` };
  }
}
