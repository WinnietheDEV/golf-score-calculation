// export interface
interface GameProgress {
  totalPlayers: number;
  playersCompletedCourse: number;
}
// ค่า totalPlayers ได้มากจากการกำหนดคนเข้าร่วม
// ค่า playersCompletedCourse ได้มาจากการนับผู้เล่นที่มี finalScore
// รับ arguements เป็น object เพื่อไม่ให้เกิดความสับสนของลำดับการรับ arguement
export function isEveryPlayerCompleteCourse({
  totalPlayers,
  playersCompletedCourse,
}: GameProgress) {
  if (totalPlayers <= 0) {
    throw new Error("Total players must be greater than 0");
  }

  if (playersCompletedCourse > totalPlayers) {
    throw new Error(
      "Total players must be greater than or equal to players completed course"
    );
  }

  return totalPlayers === playersCompletedCourse;
}
