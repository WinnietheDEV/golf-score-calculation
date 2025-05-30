import { SCORE_LABEL } from "./formatScore";
import { isEveryPlayerCompleteCourse } from "./isEveryPlayerCompleteCourse";
import { HoleScore, saveHoleScore } from "./saveHoleScore";

describe("isEveryPlayerCompleteCourse", () => {
  it("คืนค่า true เมื่อ totalPlayers เป็น 5; playersCompletedCourse เป็น 5", () => {
    // Arrange
    const totalPlayers = 5;
    const playersCompletedCourse = 5;
    const expected = true;
    // Act
    const result = isEveryPlayerCompleteCourse({
      totalPlayers,
      playersCompletedCourse,
    });
    // Assert
    expect(result).toEqual(expected);
  });

  it("คืนค่า false เมื่อ totalPlayers เป็น 4; playersCompletedCourse เป็น 3", () => {
    // Arrange
    const totalPlayers = 4;
    const playersCompletedCourse = 3;
    const expected = false;
    // Act
    const result = isEveryPlayerCompleteCourse({
      totalPlayers,
      playersCompletedCourse,
    });
    // Assert
    expect(result).toEqual(expected);
  });

  it("คืนค่า 'Total players must be greater than or equal to players completed course' เมื่อ totalPlayers เป็น 10; playersCompletedCourse เป็น 11", () => {
    // Arrange
    const totalPlayers = 10;
    const playersCompletedCourse = 11;
    const expected =
      "Total players must be greater than or equal to players completed course";
    // Act
    const result = isEveryPlayerCompleteCourse({
      totalPlayers,
      playersCompletedCourse,
    });
    // Assert
    expect(result).toEqual(expected);
  });

  it("คืนค่า 'Total players must be greater than 0' เมื่อ totalPlayers เป็น 0; playersCompletedCourse เป็น 0", () => {
    // Arrange
    const totalPlayers = 0;
    const playersCompletedCourse = 0;
    const expected = "Total players must be greater than 0";
    // Act
    const result = isEveryPlayerCompleteCourse({
      totalPlayers,
      playersCompletedCourse,
    });
    // Assert
    expect(result).toEqual(expected);
  });
});
