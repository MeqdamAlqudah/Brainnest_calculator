export default class Big {
  constructor(number) {
    this.number = Number(number);
  }

  plus(number) {
    return this.number + number.number;
  }

  minus(number) {
    return this.number - number.number;
  }

  times(number) {
    return this.number * number.number;
  }

  div(number) {
    return this.number / number.number;
  }

  mod(number) {
    return this.number % number.number;
  }
}