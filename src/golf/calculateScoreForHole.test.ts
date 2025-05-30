import { calculateScoreForHole } from "./calculateScoreForHole";

describe("calculateScoreForHole", () => {
  it("คืนค่า -1 ถ้า par เป็น 3; minPar เป็น 1; totalStroke เป็น 2", () => {
    //Arrange
    const par = 3;
    const minPar = 1;
    const totalStroke = 2;
    const expected = -1;
    //Act
    const result = calculateScoreForHole({ par, minPar, totalStroke });
    //Assert
    expect(result).toBe(expected);
  });

  it("คืนค่า 2 ถ้า par เป็น 5; minPar เป็น 2; totalStroke เป็น 7", () => {
    //Arrange
    const par = 5;
    const minPar = 2;
    const totalStroke = 7;
    const expected = 2;
    //Act
    const result = calculateScoreForHole({ par, minPar, totalStroke });
    //Assert
    expect(result).toBe(expected);
  });

  it("คืนค่า 0 ถ้า par เป็น 4; minPar เป็น 1; totalStroke เป็น 4", () => {
    //Arrange
    const par = 4;
    const minPar = 1;
    const totalStroke = 4;
    const expected = 0;
    //Act
    const result = calculateScoreForHole({ par, minPar, totalStroke });
    //Assert
    expect(result).toBe(expected);
  });

  it("คืนค่า 'Par must be greater than minPar' ถ้า par เป็น 2; minPar เป็น 2; totalStroke เป็น 1", () => {
    //Arrange
    const par = 2;
    const minPar = 2;
    const totalStroke = 1;
    const expected = "Par must be greater than minPar";
    //Act
    const result = calculateScoreForHole({ par, minPar, totalStroke });
    //Assert
    expect(result).toBe(expected);
  });

  it("คืนค่า 'MinPar can't be less than 1' ถ้า par เป็น 3; minPar เป็น 0; totalStroke เป็น 2", () => {
    //Arrange
    const par = 3;
    const minPar = 0;
    const totalStroke = 2;
    const expected = "MinPar can't be less than 1";
    //Act
    const result = calculateScoreForHole({ par, minPar, totalStroke });
    //Assert
    expect(result).toBe(expected);
  });

  it("คืนค่า 'Total stroke can't be less than minPar' ถ้า par เป็น 5; minPar เป็น 3; totalStroke เป็น 2", () => {
    //Arrange
    const par = 5;
    const minPar = 3;
    const totalStroke = 2;
    const expected = "Total stroke can't be less than minPar";
    //Act
    const result = calculateScoreForHole({ par, minPar, totalStroke });
    //Assert
    expect(result).toBe(expected);
  });
});
