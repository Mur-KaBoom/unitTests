const Calculator = require('../../app/calculator');
const {expect} = require('chai');

describe('multiply scenarios', function() {
  let calculator;
  this.beforeEach(function() {
    calculator = new Calculator();
  });
  this.afterEach(function() {
    calculator = undefined;
  });

  it('should return 720 as the result of multiplication of 1-6', function() {
    expect(calculator.multiply(1, 2, 3, 4, 5, 6)).to.be.equal(720);
  });

  it('should return 720 as result of multiplication of (-6)-(-1)', function() {
    expect(calculator.multiply(-1, -2, -3, -4, -5, -6)).to.be.equal(720);
  });

  it('should return error if any of parameters is not a number', function() {
    expect(function() {
      calculator.multiply('pug', 2, 3, 4, 5, 6);
    }).to.throw('Is not array of numbers');
  });
});
