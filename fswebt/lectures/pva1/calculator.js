var calculator = {
  sum: function() {
    return this.a + this.b;
  },

  mul: function() {
    return this.a * this.b;
  },

  read: function() {
    this.a = Number(prompt("a?", 0));
    this.b = Number(prompt("b?", 0));
  }
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
