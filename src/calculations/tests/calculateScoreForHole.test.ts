import { calculateScoreForHole } from "../calculateScoreForHole";

describe("calculateScoreForHole", () => {
  describe("Success Cases", () => {
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
  });

  describe("Alternative Cases", () => {
    it("โยน error พร้อมข้อความ 'Par must be greater than minPar' เมื่อ par ของหลุมเท่ากับ minPar ของหลุม", () => {
      const par = 2;
      const minPar = 2;
      const totalStroke = 1;

      expect(() => {
        calculateScoreForHole({ par, minPar, totalStroke });
      }).toThrow("Par must be greater than minPar");
    });

    it("โยน error พร้อมข้อความ 'MinPar must be greater than 0' เมื่อ minPar ของหลุมน้อยกว่า 1", () => {
      const par = 3;
      const minPar = 0;
      const totalStroke = 2;

      expect(() => {
        calculateScoreForHole({ par, minPar, totalStroke });
      }).toThrow("MinPar must be greater than 0");
    });

    it("โยน error พร้อมข้อความ 'Total stroke must be greater than or equal to minPar' เมื่อผู้เล่นตีได้น้อยกว่า minPar ของหลุม", () => {
      const par = 5;
      const minPar = 3;
      const totalStroke = 2;

      expect(() => {
        calculateScoreForHole({ par, minPar, totalStroke });
      }).toThrow("Total stroke must be greater than or equal to minPar");
    });

    it("โยน error พร้อมข้อความ 'Par can be greater than minPar at most 3' เมื่อ par ของหลุมมากกว่า minPar ของหลุมเกิน 3", () => {
      const par = 5;
      const minPar = 1;
      const totalStroke = 3;

      expect(() => {
        calculateScoreForHole({ par, minPar, totalStroke });
      }).toThrow("Par can be greater than minPar at most 3");
    });
  });
});
