export interface PlayersFinalScore {
  player: string;
  finalScore: number;
}

export interface Result {
  scoreBoard: PlayersFinalScore[];
  winners: string[];
}

export function getResult(playersFinalScore: PlayersFinalScore[]): Result {
  // สร้าง array สำหรับเก็บคะแนนของผู้เล่นทุกคน โดยเรียงลำดับจากคะแนนน้อย -> มาก
  const sortedPlayersFinalScore = [
    ...playersFinalScore.sort(
      (current, next) => current.finalScore - next.finalScore
    ),
  ];

  // สร้าง array ชื่อ winners โดยมีผู้เล่นคนแรกใน array เพราะรู้ว่าผู้เล่นคนแรกคือผู้เล่นที่ได้คะแนนน้อยที่สุด
  const winners: string[] = [sortedPlayersFinalScore[0].player];

  // สร้างตัวแปร bestScore เพื่อเก็บคะแนนที่ดีที่สุด ซึ่งคือคะแนนของผู้เล่นคนแรกใน sortedPlayersFinalScore
  const bestScore = sortedPlayersFinalScore[0].finalScore;

  // เริ่มลูปจากผู้เล่นคนที่ 2; ถ้ามีผู้เล่นมากกว่า 1 คน
  for (let i = 1; i < sortedPlayersFinalScore.length; i++) {
    // ถ้าผู้เล่นที่ index i มีคะแนนเท่ากับ bestScore ให้ push ผู้เล่นเข้า winners
    if (bestScore === sortedPlayersFinalScore[i].finalScore) {
      winners.push(sortedPlayersFinalScore[i].player);
      // ถ้าเจอผู้เล่นที่คะแนนไม่เท่า bestScore ให้ break จากลูปทันที
    } else {
      break;
    }
  }

  return {
    scoreBoard: sortedPlayersFinalScore,
    winners,
  };
}
