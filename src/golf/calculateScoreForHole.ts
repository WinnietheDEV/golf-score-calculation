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
}: HolePlayInfo): number | string {
  if (par <= minPar) {
    return "Par must be greater than minPar";
  }

  if (minPar < 1) {
    return "MinPar must be greater than 0";
  }

  if (totalStroke < minPar) {
    return "Total stroke must be greater than or equal to minPar";
  }

  if (par - minPar > 3) {
    return "Par can be greater than minPar atmost 3";
  }

  return totalStroke - par;
}
