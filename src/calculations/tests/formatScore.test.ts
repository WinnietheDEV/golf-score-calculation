import { formatHoleScore, SCORE_LABEL } from "../formatScore";

describe("formatScore", () => {
  it("คืนค่า {score: -3, name: 'Albatross'} เมื่อคะแนนการตีของหลุมนั้นเป็น -3", () => {
    // Arrange
    const expected = { score: -3, name: SCORE_LABEL.ALBATROSS };
    // Act
    const result = formatHoleScore(-3);
    // Assert
    expect(result).toEqual(expected);
  });

  it("คืนค่า {score: -2, name: 'Eagle'} เมื่อคะแนนการตีของหลุมนั้นเป็น -2", () => {
    // Arrange
    const expected = { score: -2, name: SCORE_LABEL.EAGLE };
    // Act
    const result = formatHoleScore(-2);
    // Assert
    expect(result).toEqual(expected);
  });

  it("คืนค่า {score: -1, name: 'Birdie'} เมื่อคะแนนการตีของหลุมนั้นเป็น -1", () => {
    // Arrange
    const expected = { score: -1, name: SCORE_LABEL.BIRDIE };
    // Act
    const result = formatHoleScore(-1);
    // Assert
    expect(result).toEqual(expected);
  });

  it("คืนค่า {score: 0, name: 'Par'} เมื่อคะแนนการตีของหลุมนั้นเป็น 0", () => {
    // Arrange
    const expected = { score: 0, name: SCORE_LABEL.PAR };
    // Act
    const result = formatHoleScore(0);
    // Assert
    expect(result).toEqual(expected);
  });

  it("คืนค่า {score: 1, name: 'Bogey'} เมื่อคะแนนการตีของหลุมนั้นเป็น 1", () => {
    // Arrange
    const expected = { score: 1, name: SCORE_LABEL.BOGEY };
    // Act
    const result = formatHoleScore(1);
    // Assert
    expect(result).toEqual(expected);
  });

  it("คืนค่า {score: 2, name: 'Double Bogey'} เมื่อคะแนนการตีของหลุมนั้นเป็น 2", () => {
    // Arrange
    const expected = { score: 2, name: SCORE_LABEL.DOUBLE_BOGEY };
    // Act
    const result = formatHoleScore(2);
    // Assert
    expect(result).toEqual(expected);
  });

  it("คืนค่า {score: 3, name: 'Triple Bogey'} เมื่อคะแนนการตีของหลุมนั้นเป็น 3", () => {
    // Arrange
    const expected = { score: 3, name: SCORE_LABEL.TRIPLE_BOGEY };
    // Act
    const result = formatHoleScore(3);
    // Assert
    expect(result).toEqual(expected);
  });

  it("คืนค่า {score: 4, name: 'Quadruple Bogey'} เมื่อคะแนนการตีของหลุมนั้นเป็น 4", () => {
    // Arrange
    const expected = { score: 4, name: SCORE_LABEL.QUADRUPLE_BOGEY };
    // Act
    const result = formatHoleScore(4);
    // Assert
    expect(result).toEqual(expected);
  });

  it("คืนค่า {score: 5, name: 'Quintuple Bogey'} เมื่อคะแนนการตีของหลุมนั้นเป็น 5", () => {
    // Arrange
    const expected = { score: 5, name: SCORE_LABEL.QUINTUPLE_BOGEY };
    // Act
    const result = formatHoleScore(5);
    // Assert
    expect(result).toEqual(expected);
  });

  it("คืนค่า {score: คะแนน, name: '+คะแนน'} เมื่อคะแนนการตีของหลุมนั้นมากกว่า 5", () => {
    // Arrange
    const expected = { score: 6, name: "+6" };
    // Act
    const result = formatHoleScore(6);
    // Assert
    expect(result).toEqual(expected);
  });

  it("คืนค่า 'Hole score must be greater than or equal to -3' เมื่อคะแนนการตีของหลุมนั้นเป็น -4", () => {
    // Arrange
    const expected = "Hole score must be greater than or equal to -3";
    // Act
    const result = formatHoleScore(-4);
    // Assert
    expect(result).toEqual(expected);
  });
});
