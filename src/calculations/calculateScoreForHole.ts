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
    throw new Error("Par must be greater than minPar");
  }

  if (minPar < 1) {
    throw new Error("MinPar must be greater than 0");
  }

  if (totalStroke < minPar) {
    throw new Error("Total stroke must be greater than or equal to minPar");
  }

  if (par - minPar > 3) {
    throw new Error("Par can be greater than minPar at most 3");
  }
  return totalStroke - par;
}
