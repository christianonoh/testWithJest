class Calculator {
  static add(a,b) {
    let sum = a + b;
    for(let i = 2; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }
  static subtract(a,b) {
    let difference = a - b;
    for(let i = 2; i < arguments.length; i++) {
      difference -= arguments[i];
    }
    return difference;
  }
  static multiply(a,b) {
    let product = a * b;
    for(let i = 2; i < arguments.length; i++) {
      product *= arguments[i];
    }
    return product;
  }
  static divide(a,b) {
    let quotient = a / b;
    for(let i = 2; i < arguments.length; i++) {
      quotient /= arguments[i];
    }
    return quotient;
  }
}

module.exports = Calculator;
