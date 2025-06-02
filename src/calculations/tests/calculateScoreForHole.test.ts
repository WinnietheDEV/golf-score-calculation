import { calculateScoreForHole } from "../calculateScoreForHole";

describe("calculateScoreForHole", () => {
  it("คืนค่าลบเมื่อผู้เล่นตีได้น้อยกว่า par ของหลุม", () => {
    // Arrange
    const par = 3;
    const minPar = 1;
    const totalStroke = 2;
    const expected = -1;
    // Act
    const result = calculateScoreForHole({ par, minPar, totalStroke });
    // Assert
    expect(result).toBe(expected);
  });

  it("คืนค่าบวกเมื่อผู้เล่นตีเกิน par ของหลุม", () => {
    // Arrange
    const par = 5;
    const minPar = 2;
    const totalStroke = 7;
    const expected = 2;
    // Act
    const result = calculateScoreForHole({ par, minPar, totalStroke });
    // Assert
    expect(result).toBe(expected);
  });

  it("คืนค่า 0 เมื่อผู้เล่นตีเท่ากับ par ของหลุม", () => {
    // Arrange
    const par = 4;
    const minPar = 1;
    const totalStroke = 4;
    const expected = 0;
    // Act
    const result = calculateScoreForHole({ par, minPar, totalStroke });
    // Assert
    expect(result).toBe(expected);
  });

  it("คืนค่า 'Par must be greater than minPar' เมื่อ par เป็น 2; minPar เป็น 2; totalStroke เป็น 1", () => {
    // Arrange
    const par = 2;
    const minPar = 2;
    const totalStroke = 1;
    const expected = "Par must be greater than minPar";
    // Act
    const result = calculateScoreForHole({ par, minPar, totalStroke });
    // Assert
    expect(result).toBe(expected);
  });

  it("คืนค่า 'MinPar must be greater than 0' เมื่อ par เป็น 3; minPar เป็น 0; totalStroke เป็น 2", () => {
    // Arrange
    const par = 3;
    const minPar = 0;
    const totalStroke = 2;
    const expected = "MinPar must be greater than 0";
    // Act
    const result = calculateScoreForHole({ par, minPar, totalStroke });
    // Assert
    expect(result).toBe(expected);
  });

  it("คืนค่า 'Total stroke must be greater than or equal to minPar' เมื่อ par เป็น 5; minPar เป็น 3; totalStroke เป็น 2", () => {
    // Arrange
    const par = 5;
    const minPar = 3;
    const totalStroke = 2;
    const expected = "Total stroke must be greater than or equal to minPar";
    // Act
    const result = calculateScoreForHole({ par, minPar, totalStroke });
    // Assert
    expect(result).toBe(expected);
  });

  it("คืนค่า 'Par can be greater than minPar atmost 3' เมื่อ par เป็น 5; minPar เป็น 1; totalStroke เป็น 3", () => {
    // Arrange
    const par = 5;
    const minPar = 1;
    const totalStroke = 3;
    const expected = "Par can be greater than minPar atmost 3";
    // Act
    const result = calculateScoreForHole({ par, minPar, totalStroke });
    // Assert
    expect(result).toBe(expected);
  });
});
