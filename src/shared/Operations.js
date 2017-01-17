/**
 * Calculator operations module
 *
 * @module
 * @copyright Bill Robitske, Jr. 2017
 * @author Bill Robitske, Jr. <bill.robitske.jr@gmail.com>
 * @license MIT
 */

export default class Operations {

  static add(operand1) {
    return operand2 => operand1 + operand2;
  }

  static subtract(operand1) {
    return operand2 => operand1 - operand2;
  }

  static multiply(operand1) {
    return operand2 => operand1 * operand2;
  }

  static divide(operand1) {
    return operand2 => operand1 / operand2;
  }

  static equal() {
    return operand => operand;
  }
}
