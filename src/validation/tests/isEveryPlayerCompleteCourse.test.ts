import { isEveryPlayerCompleteCourse } from "../isEveryPlayerCompleteCourse";

describe("isEveryPlayerCompleteCourse", () => {
  describe("Success Cases", () => {
    it("คืนค่า true เมื่อจำนวนผู้เล่นทั้งหมดเท่ากับจำนวนผู้เล่นที่ตีครบทุกหลุม", () => {
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

    it("คืนค่า false เมื่อจำนวนผู้เล่นทั้งหมดไม่เท่ากับจำนวนผู้เล่นที่ตีครบทุกหลุม", () => {
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
  });

  describe("Alternative Cases", () => {
    it("โยน error พร้อมข้อความ 'Total players must be greater than or equal to players completed course' เมื่อจำนวนผู้เล่นที่ตีครบทุกหลุมมากกว่าจำนวนผู้เล่นทั้งหมด", () => {
      const totalPlayers = 10;
      const playersCompletedCourse = 11;

      expect(() => {
        isEveryPlayerCompleteCourse({
          totalPlayers,
          playersCompletedCourse,
        });
      }).toThrow(
        "Total players must be greater than or equal to players completed course"
      );
    });

    it("โยน error พร้อมข้อความ 'Total players must be greater than 0' เมื่อจำนวนผู้เล่นทั้งหมดเป็น 0", () => {
      const totalPlayers = 0;
      const playersCompletedCourse = 0;

      expect(() => {
        isEveryPlayerCompleteCourse({
          totalPlayers,
          playersCompletedCourse,
        });
      }).toThrow("Total players must be greater than 0");
    });
  });
});
