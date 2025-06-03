// export interface
interface PlayerCourseProgress {
  holesPlayed: number;
  totalHoles: number;
}
// ค่า holesPlayed ได้มากจากค่า length ของ courseScore ซึ่งเป็น array ที่เก็บคะแนนของทุกสนาม
// ค่า totalHoles ได้มาจากขั้นตอนการเลือกสนาม
// รับ arguements เป็น object เพื่อไม่ให้เกิดความสับสนของลำดับการรับ arguement
export function isAPlayerCompleteCourse({
  holesPlayed,
  totalHoles,
}: PlayerCourseProgress): boolean {
  if (holesPlayed > totalHoles) {
    throw new Error("Holes played must be less than or equal to totalHoles");
  }

  if (holesPlayed < 1) {
    throw new Error("Holes played must be greater than 0");
  }

  return holesPlayed === totalHoles;
}
