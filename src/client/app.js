/**
 * Calculator app
 *
 * @copyright Bill Robitske, Jr. 2017
 * @author Bill Robitske, Jr. <bill.robitske.jr@gmail.com>
 * @license MIT
 */
import Display from '../shared/calculator-display';

const selectors = {
  screen: '.c-calculator__screen',
  digitButtons: '.c-calculator__digit-button, .c-calculator__zero-button',
};

window.addEventListener('load', () => {
  const digitButtons = Array.prototype.slice
    .call(document.querySelectorAll(selectors.digitButtons));
  digitButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const screen = document.querySelector(selectors.screen);
      screen.textContent = Display.addDigitToValue(screen.textContent, event.target.textContent);
    });
  });
  window.addEventListener('keypress', (event) => {
    if (event.keyCode !== 46 && (event.keyCode < 48 || event.keyCode > 57)) return;
    const screen = document.querySelector(selectors.screen);
    screen.textContent = Display.addDigitToValue(screen.textContent,
      String.fromCharCode(event.keyCode));
  });
});
