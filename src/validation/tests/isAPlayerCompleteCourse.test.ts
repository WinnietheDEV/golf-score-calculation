import { isAPlayerCompleteCourse } from "../isAPlayerCompleteCourse";

describe("isAPlayerCompleteGame", () => {
  it("คืนค่า true เมื่อ holesPlayed เป็น 5; totalholes เป็น 5", () => {
    // Arrange
    const holesPlayed = 5;
    const totalHoles = 5;
    const expected = true;
    // Act
    const result = isAPlayerCompleteCourse({ holesPlayed, totalHoles });
    // Assert
    expect(result).toBe(expected);
  });

  it("คืนค่า false เมื่อ holesPlayed เป็น 2; totalholes เป็น 3", () => {
    // Arrange
    const holesPlayed = 2;
    const totalHoles = 3;
    const expected = false;
    // Act
    const result = isAPlayerCompleteCourse({ holesPlayed, totalHoles });
    // Assert
    expect(result).toBe(expected);
  });

  it("คืนค่า 'Holes played must be less than or equal to totalHoles' เมื่อ holesPlayed เป็น 4; totalholes เป็น 3", () => {
    // Arrange
    const holesPlayed = 4;
    const totalHoles = 3;
    const expected = "Holes played must be less than or equal to totalHoles";
    // Act
    const result = isAPlayerCompleteCourse({ holesPlayed, totalHoles });
    // Assert
    expect(result).toBe(expected);
  });

  it("คืนค่า 'Holes played must be less than or equal to totalHoles' เมื่อ holesPlayed เป็น 4; totalholes เป็น 3", () => {
    // Arrange
    const holesPlayed = 4;
    const totalHoles = 3;
    const expected = "Holes played must be less than or equal to totalHoles";
    // Act
    const result = isAPlayerCompleteCourse({ holesPlayed, totalHoles });
    // Assert
    expect(result).toBe(expected);
  });

  it("คืนค่า 'Holes played must be greater than 0' เมื่อ holesPlayed เป็น 0; totalholes เป็น 3", () => {
    // Arrange
    const holesPlayed = 0;
    const totalHoles = 3;
    const expected = "Holes played must be greater than 0";
    // Act
    const result = isAPlayerCompleteCourse({ holesPlayed, totalHoles });
    // Assert
    expect(result).toBe(expected);
  });
});
