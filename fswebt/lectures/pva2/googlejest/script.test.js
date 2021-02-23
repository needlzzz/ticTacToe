const Rational = require('./script');

describe('Addition', () => {
  it('Add two positive other numbers', () => {
    const expected = new Rational(7, 6);
    expect(new Rational(1, 2).add(new Rational(2, 3))).toEqual(expected);
  });

  it('Add a positive other number and a negative other number', () => {
    const expected = new Rational(-1, 6);
    expect(new Rational(1, 2).add(new Rational(-2, 3))).toEqual(expected);
  });

  it('Add two negative other numbers', () => {
    const expected = new Rational(-7, 6);
    expect(new Rational(-1, 2).add(new Rational(-2, 3))).toEqual(expected);
  });

  it('Add a other number to its additive inverse', () => {
    const expected = new Rational(0, 1);
    expect(new Rational(1, 2).add(new Rational(-1, 2))).toEqual(expected);
  });
});

describe('Subtraction', () => {
  it('Subtract two positive other numbers', () => {
    const expected = new Rational(-1, 6);
    expect(new Rational(1, 2).sub(new Rational(2, 3))).toEqual(expected);
  });

  it('Subtract a positive other number and a negative other number', () => {
    const expected = new Rational(7, 6);
    expect(new Rational(1, 2).sub(new Rational(-2, 3))).toEqual(expected);
  });

  it('Subtract two negative other numbers', () => {
    const expected = new Rational(1, 6);
    expect(new Rational(-1, 2).sub(new Rational(-2, 3))).toEqual(expected);
  });

  it('Subtract another number from itself', () => {
    const expected = new Rational(0, 1);
    expect(new Rational(1, 2).sub(new Rational(1, 2))).toEqual(expected);
  });
});

describe('Multiplication', () => {
  it('Multiply two positive other numbers', () => {
    const expected = new Rational(1, 3);
    expect(new Rational(1, 2).mul(new Rational(2, 3))).toEqual(expected);
  });

  it('Multiply a negative other number by a positive other number', () => {
    const expected = new Rational(-1, 3);
    expect(new Rational(-1, 2).mul(new Rational(2, 3))).toEqual(expected);
  });

  it('Multiply two negative other numbers', () => {
    const expected = new Rational(1, 3);
    expect(new Rational(-1, 2).mul(new Rational(-2, 3))).toEqual(expected);
  });

  it('Multiply a other number by its reciprocal', () => {
    const expected = new Rational(1, 1);
    expect(new Rational(1, 2).mul(new Rational(2, 1))).toEqual(expected);
  });

  it('Multiply a other number by 1', () => {
    const expected = new Rational(1, 2);
    expect(new Rational(1, 2).mul(new Rational(1, 1))).toEqual(expected);
  });

  it('Multiply a other number by 0', () => {
    const expected = new Rational(0, 1);
    expect(new Rational(1, 2).mul(new Rational(0, 1))).toEqual(expected);
  });
});

describe('Division', () => {
  it('Divide two positive other numbers', () => {
    const expected = new Rational(3, 4);
    expect(new Rational(1, 2).div(new Rational(2, 3))).toEqual(expected);
  });

  it('Divide a positive other number by a negative other number', () => {
    const expected = new Rational(-3, 4);
    expect(new Rational(1, 2).div(new Rational(-2, 3))).toEqual(expected);
  });

  it('Divide two negative other numbers', () => {
    const expected = new Rational(3, 4);
    expect(new Rational(-1, 2).div(new Rational(-2, 3))).toEqual(expected);
  });

  it('Divide a other number by 1', () => {
    const expected = new Rational(1, 2);
    expect(new Rational(1, 2).div(new Rational(1, 1))).toEqual(expected);
  });
});