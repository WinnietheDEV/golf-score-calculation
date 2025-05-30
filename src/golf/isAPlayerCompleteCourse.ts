// export interface
interface PlayerCourseProgress {
  holesPlayed: number;
  totalHoles: number;
}
// ค่า holesPlayed ได้มากจากค่า length ของ courseScore ซึ่งเป็น array ที่เก็บคะแนนของทุกสนาม
// ค่า totalHoles ได้มาจากขั้นตอนการเลือกสนาม

//รับ arguements เป็น object เพื่อไม่ให้เกิดความสับสนของลำดับการรับ arguement
export function isAPlayerCompleteCourse({
  holesPlayed,
  totalHoles,
}: PlayerCourseProgress): boolean | string {
  if (holesPlayed > totalHoles) {
    return "Holes played must be less than or equal to totalHoles";
  }

  if (holesPlayed < 1) {
    return "Holes played must be greater than 0";
  }

  return holesPlayed === totalHoles;
}
