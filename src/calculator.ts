class Calculator {
  value: number;

  constructor() {
    this.value = 0;
  }

  set(num: number) {
    this.value = num;
  }

  clear() {
    this.value = 0;
  }

  add(num: number) {
    this.value = this.value + num;
  }

  subtract(num: number) {
    this.value = this.value - num;
  }

  multiply(num: number) {
    this.value = this.value * num;
  }

  divide(num: number) {
    this.value = this.value / num;
  }
}

module.exports = Calculator;
