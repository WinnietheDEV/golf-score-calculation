import { getResult } from "../getResult";

describe("getResult", () => {
  it("คืนสกอร์บอร์ดและผู้ชนะเมื่อมีผู้เล่นเพียงคนเดียว", () => {
    // Arrange
    const playersFinalScore = [{ player: "Win", finalScore: 3 }];
    const expected = {
      scoreBoard: [{ player: "Win", finalScore: 3 }],
      winners: ["Win"],
    };
    // Act
    const result = getResult(playersFinalScore);
    // Assert
    expect(result).toEqual(expected);
  });

  it("คืนสกอร์บอร์ดที่เรียงตามคะแนน เมื่อมีผู้เล่นหลายคนและระบุผู้ชนะเมื่อมีผู้ชนะคนเดียว", () => {
    // Arrange
    const playersFinalScore = [
      { player: "Win", finalScore: 3 },
      { player: "Ti", finalScore: 0 },
      { player: "Meng", finalScore: -2 },
    ];
    const expected = {
      scoreBoard: [
        { player: "Meng", finalScore: -2 },
        { player: "Ti", finalScore: 0 },
        { player: "Win", finalScore: 3 },
      ],
      winners: ["Meng"],
    };
    // Act
    const result = getResult(playersFinalScore);
    // Assert
    expect(result).toEqual(expected);
  });

  it("คืนสกอร์บอร์ดที่เรียงตามคะแนน เมื่อมีผู้เล่นหลายคนและระบุผู้ชนะเมื่อมีผู้ชนะร่วม", () => {
    // Arrange
    const playersFinalScore = [
      { player: "Win", finalScore: 3 },
      { player: "Ti", finalScore: 0 },
      { player: "Meng", finalScore: -2 },
      { player: "Big", finalScore: -2 },
    ];
    const expected = {
      scoreBoard: [
        { player: "Meng", finalScore: -2 },
        { player: "Big", finalScore: -2 },
        { player: "Ti", finalScore: 0 },
        { player: "Win", finalScore: 3 },
      ],
      winners: ["Meng", "Big"],
    };
    // Act
    const result = getResult(playersFinalScore);
    // Assert
    expect(result).toEqual(expected);
  });
});
