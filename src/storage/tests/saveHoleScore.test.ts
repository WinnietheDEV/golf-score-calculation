import { SCORE_LABEL } from "../../calculations/formatScore";
import { HoleScore, saveHoleScore } from "../saveHoleScore";

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

  it("คืนค่า [{score: -3, label: 'Albatross'}, {score: 7, label: '7'}] เมื่อ holeScore เป็น {score: 7, label: '7'}; courseScore เป็น [{score: -3, label: 'Albatross'}]", () => {
    // Arrange
    const holeScore = { score: 7, label: "7" };
    const courseScore: HoleScore[] = [
      { score: -3, label: SCORE_LABEL.ALBATROSS },
    ];
    const expected = [
      { score: -3, label: SCORE_LABEL.ALBATROSS },
      { score: 7, label: "7" },
    ];
    // Act
    const result = saveHoleScore(holeScore, courseScore);
    // Assert
    expect(result).toEqual(expected);
  });
});
