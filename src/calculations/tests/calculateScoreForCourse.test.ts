import { calculateScoreForCourse } from "../calculateScoreForCourse";

describe("calculateScoreForCourse", () => {
  describe("Success Cases", () => {
    it("คืนค่าผลรวมของคะแนนเมื่อมีคะแนนเพียงหลุมเดียว", () => {
      // Arrange
      const courseScore = [-3];
      const expected = -3;
      // Act
      const result = calculateScoreForCourse(courseScore);
      // Assert
      expect(result).toBe(expected);
    });

    it("คืนค่าผลรวมของคะแนนจากหลายหลุม", () => {
      // Arrange
      const courseScore = [-3, 1];
      const expected = -2;
      // Act
      const result = calculateScoreForCourse(courseScore);
      // Assert
      expect(result).toBe(expected);
    });
  });

  describe("Alternative Cases", () => {
    it("โยน error พร้อมข้อความ 'Course score can't be empty' เมื่อยังไม่มีคะแนนในการบันทึกคะแนน", () => {
      expect(() => {
        calculateScoreForCourse([]);
      }).toThrow("Course score can't be empty");
    });
  });
});
