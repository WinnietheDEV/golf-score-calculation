export function calculateScoreForCourse(courseScore: number[]): number {
  if (courseScore.length < 1) {
    throw new Error("Course score can't be empty");
  }

  let finalScore = 0;

  for (let i = 0; i < courseScore.length; i++) {
    finalScore += courseScore[i];
  }

  return finalScore;
}
