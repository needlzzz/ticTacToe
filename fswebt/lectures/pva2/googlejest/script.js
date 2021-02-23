const gcd = (num, denom) => {
  let a = Math.max(Math.abs(num), Math.abs(denom));
  let b = Math.min(Math.abs(num), Math.abs(denom));
  let tmp;
  while (b != 0) {
    tmp = b;
    b = a % tmp;
    a = tmp;
  }
  return a;
};

class Rational {
  constructor(num, denom) {
    let divisor = gcd(num, denom);
    if (num < 0) {
      divisor *= -1;
    }
    this.num = num / divisor;
    this.denom = ((num == 0 && denom < 0 ? -1 : 1) * denom) / divisor;
  }

  add(other) {
    return new Rational(
      this.num * other.denom + this.denom * other.num,
      this.denom * other.denom
    );
  }
  
  sub(other) {
    return new Rational(
      this.num * other.denom - this.denom * other.num,
      this.denom * other.denom
    );
  }

  mul(other) {
    return new Rational(this.num * other.num, this.denom * other.denom);
  }

  div(other) {
    return new Rational(this.num * other.denom, this.denom * other.num);
  }
}

module.exports = Rational;
