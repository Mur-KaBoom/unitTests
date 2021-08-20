const Calculator = require('../../app/calculator');
const {expect} = require('chai');

describe('add scenarios', function() {
  let calculator;
  this.beforeEach(function() {
    calculator = new Calculator();
  });
  this.afterEach(function() {
    calculator = undefined;
  });

  it('should return 21 as sum of 1-6', function() {
    expect(calculator.add(1, 2, 3, 4, 5, 6)).to.be.equal(21);
  });

  it('should return -21 as sum of (-6)-(-1)', function() {
    expect(calculator.add(-1, -2, -3, -4, -5, -6)).to.be.equal(-21);
  });

  it('should return error if any of parameters is not a number', function() {
    expect(function() {
      calculator.add('pug', 2, 3, 4, 5, 6);
    }).to.throw('Is not array of numbers');
  });
});
