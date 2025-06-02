import { isAPlayerCompleteCourse } from "../isAPlayerCompleteCourse";

describe("isAPlayerCompleteGame", () => {
  describe("Success Cases", () => {
    it("คืนค่า true เมื่อจำนวนหลุมที่ตีเสร็จเท่ากับจำนวนหลุมตอนเลือกสนาม", () => {
      // Arrange
      const holesPlayed = 5;
      const totalHoles = 5;
      const expected = true;
      // Act
      const result = isAPlayerCompleteCourse({ holesPlayed, totalHoles });
      // Assert
      expect(result).toBe(expected);
    });

    it("คืนค่า false เมื่อจำนวนหลุมที่ตีเสร็จไม่เท่ากับจำนวนหลุมตอนเลือกสนาม", () => {
      // Arrange
      const holesPlayed = 2;
      const totalHoles = 3;
      const expected = false;
      // Act
      const result = isAPlayerCompleteCourse({ holesPlayed, totalHoles });
      // Assert
      expect(result).toBe(expected);
    });
  });

  describe("Alternative Cases", () => {
    it("โยน error พร้อมข้อความ 'Holes played must be less than or equal to totalHoles' เมื่อจำนวนหลุมที่ตีเสร็จมากกว่าจำนวนหลุมทั้งหมด", () => {
      const holesPlayed = 4;
      const totalHoles = 3;

      expect(() => {
        isAPlayerCompleteCourse({ holesPlayed, totalHoles });
      }).toThrow("Holes played must be less than or equal to totalHoles");
    });

    it("โยน error พร้อมข้อความ 'Holes played must be greater than 0' เมื่อจำนวนหลุมที่ตีเสร็จน้อยกว่า 1", () => {
      const holesPlayed = 0;
      const totalHoles = 3;

      expect(() => {
        isAPlayerCompleteCourse({ holesPlayed, totalHoles });
      }).toThrow("Holes played must be greater than 0");
    });
  });
});
