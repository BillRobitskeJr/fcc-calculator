/**
 * Calculator display module
 *
 * @module
 * @copyright Bill Roibtske, Jr. 2017
 * @author Bill Robitske, Jr. <bill.robitske.jr@gmail.com>
 * @license MIT
 */

export default class {

  static addDigitToValue(curValue, digit) {
    if (digit === '.' && curValue.indexOf(digit) !== -1) return curValue;
    if (curValue === '0' && digit !== '.') return digit;
    return curValue + digit;
  }
}
