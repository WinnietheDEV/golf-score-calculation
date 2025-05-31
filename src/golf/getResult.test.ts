import { getResult } from "./getResult";

describe("getResult", () => {
  it("คืนค่า {scoreBoard: [{player:'Win',finalScore: 3}], winners: ['Win']} เมื่อ playersFinalScore เป็น [{player: 'Win', finalScore: 3}]", () => {
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

  it("คืนค่า {scoreBoard: [{player:'Meng',finalScore -2}, {player: 'Ti',finalScore:0}, {player:'WIn',finalScore:3}], winners: ['Meng']} เมื่อ playersFinalScore เป็น [{player: 'Win', finalScore: 3}, {player: 'Ti', finalScore: 0}, {player: 'Meng', finalScore: -2}]", () => {
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

  it('คืนค่า {scoreBoard: [{player:"Meng",finalScore -2}, {player:"Big",finalScore -2},{player: "Ti",finalScore:0}, {player:"Win",finalScore:3}], winners: ["Meng", "Big"]} เมื่อ playersFinalScore เป็น [{player: "Win", finalScore: 3}, {player: "Ti", finalScore: -0}, {player: "Meng", finalScore: -2}, {player: "Big", finalScore: -2}]', () => {
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
