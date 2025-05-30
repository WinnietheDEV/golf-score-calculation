import { SCORE_LABEL } from "./formatScore";
import { saveHoleScore } from "./saveHoleScore";

describe("saveHoleScore", () => {
  it("คืนค่า [{score: -3, label: 'Albratross'}] เมื่อ holeScore เป็น {score: -3, label: 'Albatross'; courseScore เป็น []", () => {
    // Arrange
    const holeScore = { score: -3, label: SCORE_LABEL.ALBATROSS };
    const courseScore: [] = [];
    const expected = [{ score: -3, label: SCORE_LABEL.ALBATROSS }];
    // Act
    const result = saveHoleScore(holeScore, courseScore);
    // Assert
    expect(result).toEqual(expected);
  });
});
