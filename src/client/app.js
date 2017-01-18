/**
 * Calculator app
 *
 * @copyright Bill Robitske, Jr. 2017
 * @author Bill Robitske, Jr. <bill.robitske.jr@gmail.com>
 * @license MIT
 */
import Calculator from '../shared/Calculator';
import Operations from '../shared/Operations';

const selectors = {
  screen: '.c-calculator__screen',
  digitButtons: '.c-calculator__digit-button, .c-calculator__zero-button',
  operatorButtons: '.c-calculator__operator-button, .c-calculator__equals-button',
};

const attributes = {
  operation: 'data-operation',
};

const calculator = new Calculator();

const operations = {
  add: Operations.add,
  subtract: Operations.subtract,
  multiply: Operations.multiply,
  divide: Operations.divide,
  equal: Operations.equal,
};

window.addEventListener('load', () => {
  /**
   * Initiate calculator screen display
   */
  const screen = document.querySelector(selectors.screen);
  screen.textContent = `${calculator.displayValue}`;

  /**
   * Enable calculator digit buttons
   */
  const digitButtons = Array.prototype.slice
    .call(document.querySelectorAll(selectors.digitButtons));
  digitButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      calculator.appendDigit(event.target.textContent);
      screen.textContent = `${calculator.displayValue}`;
    });
  });
  window.addEventListener('keypress', (event) => {
    if (event.keyCode !== 46 && (event.keyCode < 48 || event.keyCode > 57)) return;
    calculator.appendDigit(String.fromCharCode(event.keyCode));
    screen.textContent = `${calculator.displayValue}`;
  });

  /**
   * Enable calcuator operation buttons
   */
  const operatorButtons = Array.prototype.slice
    .call(document.querySelectorAll(selectors.operatorButtons));
  operatorButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      calculator.applyOperation(operations[event.target.getAttribute(attributes.operation)]);
      screen.textContent = `${calculator.displayValue}`;
    });
  });
});
