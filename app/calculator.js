/**
 *
 *
 * @class Calculator
 */
class Calculator {
  /**
   * Creates an instance of Calculator.
   * @memberof Calculator
   */
  constructor() {
  }

  /**
   *
   *
   * @param {*} values
   * @return {number <Number>} result of sum of all taken params
   * @memberof Calculator
   */
  add(...values) {
    if (values.every((item) => typeof item === `number`)) {
      return values.reduce((a, b) => a + b, 0);
    } else {
      throw new Error(`Is not array of numbers`);
    }
  }

  /**
   *
   *
   * @param {*} values
   * @return {number <Number>} result of multiplying of all taken params
   * @memberof Calculator
   */
  multiply(...values) {
    if (values.every((item) => typeof item === `number`)) {
      return values.reduce((a, b) => a * b);
    } else {
      throw new Error(`Is not array of numbers`);
    }
  }
}

module.exports = Calculator;
