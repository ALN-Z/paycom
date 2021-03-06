import { MyMath } from "../models/Math";
import { expect } from "chai";
import { Operation } from "../enums/Operation";



describe("Check class methods", () => {
  describe("The add function", () => {
    it("Should add 2 numbers", () => {
      const math = new MyMath(4, 5, Operation.add);
      const result = math.add();

      expect(result).to.be.equal(9);
    });
  });

  describe("The subtract function", () => {
    it("Should subtract 2 numbers", () => {
      const math = new MyMath(5, 4, Operation.subtract);
      const result = math.subtract();

      expect(result).to.be.equal(1);
    });
  });

  describe("The divide function", () => {
    it("Should divide 2 numbers", () => {
      const math = new MyMath(8, 4, Operation.divide);
      const result = math.divide();

      expect(result).to.be.equal(2);
    });
  });
  describe("The divide function with 0", () => {
    it("Divide operation if last number is zero", () => {
      const math = new MyMath(8, 0, Operation.divide);

      expect(() => math.divide()).to.throw(
        "Division operation cannot be performed"
      );
    });
  });

  describe("The multiply function", () => {
    it("Should multiply 2 numbers", () => {
      const math = new MyMath(8, 1, Operation.multiply);
      const result = math.multiply();

      expect(result).to.be.equal(8);
    });
  });
});



