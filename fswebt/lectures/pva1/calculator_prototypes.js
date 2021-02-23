function Calculator() {
  this.read();
}

Calculator.prototype.read = function() {
  this.a = Number(prompt("a?", 0));
  this.b = Number(prompt("b?", 0));
}

Calculator.prototype.sum = function() {
  return this.a + this.b;
}

Calculator.prototype.mul = function() {
  return this.a * this.b;
}

var calculator = new Calculator();
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
