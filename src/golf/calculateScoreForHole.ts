interface HolePlayInfo {
  par: number;
  minPar: number;
  totalStroke: number;
}

// ค่า par และ minPar ได้จากข้อมูลหลุม
export function calculateScoreForHole({
  par,
  minPar,
  totalStroke,
}: HolePlayInfo) {
  if (par <= minPar) {
    return "Par must be greater than minPar";
  }

  if (minPar < 1) {
    return "MinPar can't be less than 1";
  }

  if (totalStroke < minPar) {
    return "Total stroke can't be less than minPar";
  }

  return totalStroke - par;
}
