import { calculateScoreForCourse } from "./calculateScoreForCourse";

describe("calculateScoreForCourse", () => {
  it("คืนค่า -3 เมื่อ courseScore เป็น [-3]", () => {
    // Arrange
    const courseScore = [-3];
    const expected = -3;
    // Act
    const result = calculateScoreForCourse(courseScore);
    // Assert
    expect(result).toBe(expected);
  });

  it("คืนค่า -2 เมื่อ courseScore เป็น [-3,1]", () => {
    // Arrange
    const courseScore = [-3, 1];
    const expected = -2;
    // Act
    const result = calculateScoreForCourse(courseScore);
    // Assert
    expect(result).toBe(expected);
  });

  it("คืนค่า 'Course score can't be empty' เมื่อ courseScore เป็น []", () => {
    // Arrange
    const courseScore: [] = [];
    const expected = "Course score can't be empty";
    // Act
    const result = calculateScoreForCourse(courseScore);
    // Assert
    expect(result).toBe(expected);
  });
});
