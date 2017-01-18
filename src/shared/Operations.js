/**
 * Calculator operations module
 *
 * @module
 * @copyright Bill Robitske, Jr. 2017
 * @author    Bill Robitske, Jr. <bill.robitske.jr@gmail.com>
 * @license   MIT
 */

export default class Operations {

  /**
   * Adds two terms
   *
   * @static
   * @param   {Number}    addend1
   * @returns {Function}  Function taking the second addend, and returning the
   *                      sum
   */
  static add(addend1) {
    return addend2 => addend1 + addend2;
  }

  /**
   * Subtracts one term from another
   *
   * @static
   * @param   {Number}    minuend
   * @returns {Function}  Function taking the subtrahend and returning the
   *                      difference
   */
  static subtract(minuend) {
    return subtrahend => minuend - subtrahend;
  }

  /**
   * Multiplies two terms
   *
   * @static
   * @param   {Number}    multiplicand
   * @returns {Function}  Function taking the multiplier and returning the
   *                      product
   */
  static multiply(multiplicand) {
    return multiplier => multiplicand * multiplier;
  }

  /**
   * Divides one term from another
   *
   * @static
   * @param   {Number}    numerator
   * @returns {Function}  Function taking the denominator and returning the
   *                      dividend
   */
  static divide(numerator) {
    return denominator => numerator / denominator;
  }

  /**
   * Returns the value (an identify function)
   *
   * @static
   * @returns {Function}  Function taking a value and returning it
   */
  static equal() {
    return value => value;
  }
}
