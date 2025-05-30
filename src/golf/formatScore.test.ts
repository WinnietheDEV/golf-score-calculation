import { formatHoleScore, SCORE_LABEL } from "./formatScore";

describe("formatScore", () => {
  it("คืนค่า {score: -3, label: 'Albatross'} เมื่อ holeScore เป็น -3", () => {
    // Arrange
    const expected = { score: -3, label: SCORE_LABEL.ALBATROSS };
    // Act
    const result = formatHoleScore(-3);
    // Assert
    expect(result).toEqual(expected);
  });

  it("คืนค่า {score: -2, label: 'Eagle'} เมื่อ holeScore เป็น -2", () => {
    // Arrange
    const expected = { score: -2, label: SCORE_LABEL.EAGLE };
    // Act
    const result = formatHoleScore(-2);
    // Assert
    expect(result).toEqual(expected);
  });

  it("คืนค่า {score: -1, label: 'Birdie'} เมื่อ holeScore เป็น -1", () => {
    // Arrange
    const expected = { score: -1, label: SCORE_LABEL.BIRDIE };
    // Act
    const result = formatHoleScore(-1);
    // Assert
    expect(result).toEqual(expected);
  });

  it("คืนค่า {score: 0, label: 'Par'} เมื่อ holeScore เป็น 0", () => {
    // Arrange
    const expected = { score: 0, label: SCORE_LABEL.PAR };
    // Act
    const result = formatHoleScore(0);
    // Assert
    expect(result).toEqual(expected);
  });

  it("คืนค่า {score: 1, label: 'Bogey'} เมื่อ holeScore เป็น 1", () => {
    // Arrange
    const expected = { score: 1, label: SCORE_LABEL.BOGEY };
    // Act
    const result = formatHoleScore(1);
    // Assert
    expect(result).toEqual(expected);
  });

  it("คืนค่า {score: 2, label: 'Double Bogey'} เมื่อ holeScore เป็น 2", () => {
    // Arrange
    const expected = { score: 2, label: SCORE_LABEL.DOUBLE_BOGEY };
    // Act
    const result = formatHoleScore(2);
    // Assert
    expect(result).toEqual(expected);
  });

  it("คืนค่า {score: 3, label: 'Triple Bogey'} เมื่อ holeScore เป็น 3", () => {
    // Arrange
    const expected = { score: 3, label: SCORE_LABEL.TRIPLE_BOGEY };
    // Act
    const result = formatHoleScore(3);
    // Assert
    expect(result).toEqual(expected);
  });

  it("คืนค่า {score: 4, label: 'Quadruple Bogey'} เมื่อ holeScore เป็น 4", () => {
    // Arrange
    const expected = { score: 4, label: SCORE_LABEL.QUADRUPLE_BOGEY };
    // Act
    const result = formatHoleScore(4);
    // Assert
    expect(result).toEqual(expected);
  });

  it("คืนค่า {score: 5, label: 'Quintuple Bogey'} เมื่อ holeScore เป็น 5", () => {
    // Arrange
    const expected = { score: 5, label: SCORE_LABEL.QUINTUPLE_BOGEY };
    // Act
    const result = formatHoleScore(5);
    // Assert
    expect(result).toEqual(expected);
  });

  it("คืนค่า {score: 6, label: '%label'} เมื่อ holeScore เป็น 6", () => {
    // Arrange
    const expected = { score: 6, label: "6" };
    // Act
    const result = formatHoleScore(6);
    // Assert
    expect(result).toEqual(expected);
  });

  it("คืนค่า {score: 15, label: '%label'} เมื่อ holeScore เป็น 15", () => {
    // Arrange
    const expected = { score: 15, label: "15" };
    // Act
    const result = formatHoleScore(15);
    // Assert
    expect(result).toEqual(expected);
  });

  it("คืนค่า 'Hole score must be greater than or equal to -3' เมื่อ holeScore เป็น -4", () => {
    // Arrange
    const expected = "Hole score must be greater than or equal to -3";
    // Act
    const result = formatHoleScore(-4);
    // Assert
    expect(result).toEqual(expected);
  });
});
