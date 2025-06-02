import { SCORE_NAME } from "../../calculations/formatScore";
import { HoleScore, saveHoleScore } from "../saveHoleScore";

describe("saveHoleScore", () => {
  it("เพิ่มคะแนนหลุมลงในคะแนนรวม ในกรณีที่คะแนนรวมยังไม่มีคะแนน", () => {
    // Arrange
    const holeScore = { score: -3, name: SCORE_NAME.ALBATROSS };
    const courseScore: [] = [];
    const expected = [{ score: -3, name: SCORE_NAME.ALBATROSS }];
    // Act
    const result = saveHoleScore(holeScore, courseScore);
    // Assert
    expect(result).toEqual(expected);
  });

  it("เพิ่มคะแนนหลุมลงในคะแนนรวม ในกรณีที่คะแนนรวมมีคะแนนหลุ่มอื่นอยู่แล้ว", () => {
    // Arrange
    const holeScore = { score: 7, name: "7" };
    const courseScore: HoleScore[] = [
      { score: -3, name: SCORE_NAME.ALBATROSS },
    ];
    const expected = [
      { score: -3, name: SCORE_NAME.ALBATROSS },
      { score: 7, name: "7" },
    ];
    // Act
    const result = saveHoleScore(holeScore, courseScore);
    // Assert
    expect(result).toEqual(expected);
  });
});
