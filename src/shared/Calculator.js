/**
 * Calculator module
 *
 * @module
 * @copyright Bill Robitske, Jr. 2017
 * @author Bill Robitske, Jr. <bill.robitske.jr@gmail.com>
 * @license MIT
 */
import Operations from './Operations';

/**
 * Calcuator encapsulation
 *
 * @class
 */
export default class Calculator {
  construct() {
    this.displayValue = '0';
    this.isClear = true;
    this.lastOperation = Operations.equal(0);
  }

  /**
   * Clears the calculator number buffer; if already clear, clears operation
   * buffer
   *
   * @returns {Calculator} This calculator
   */
  clear() {
    if (this.isClear) this.lastOperation = Operations.equal(0);
    this.displayValue = '0';
    this.isClear = true;
    return this;
  }

  /**
   * Appends a digit (or a decimal point) to number buffer, shifing the existing
   * digits left.
   *
   * @param {Number|String} digit Digit to append to number buffer
   * @returns {Calculator} This calculator
   */
  appendDigit(digit) {
    if (`${digit}`.match(/^[\d.]$/) === null) return this;
    if ((this.isClear || this.displayValue === '0') && digit !== '.') {
      this.displayValue = `${digit}`;
    } else {
      this.displayValue = `${this.displayValue}${digit}`;
    }
    return this;
  }

  /**
   * Applies a new operation, evaluating the last selected operation with the
   * current number buffer value and setting the number buffer as "cleared".
   *
   * @param {Operation} operation New operation to apply
   * @returns {Calculator} This calcuator
   */
  applyOperation(operation) {
    this.displayValue = this.lastOperation(Number.parseFloat(this.displayValue));
    this.lastOperation = operation(this.displayValue);
    this.isClear = true;
  }
}
