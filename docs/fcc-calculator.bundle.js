/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Calculator = __webpack_require__(1);
	
	var _Calculator2 = _interopRequireDefault(_Calculator);
	
	var _Operations = __webpack_require__(2);
	
	var _Operations2 = _interopRequireDefault(_Operations);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Calculator app
	 *
	 * @copyright Bill Robitske, Jr. 2017
	 * @author Bill Robitske, Jr. <bill.robitske.jr@gmail.com>
	 * @license MIT
	 */
	var selectors = {
	  screen: '.c-calculator__screen',
	  digitButtons: '.c-calculator__digit-button, .c-calculator__zero-button',
	  operatorButtons: '.c-calculator__operator-button, .c-calculator__equals-button'
	};
	
	var attributes = {
	  operation: 'data-operation'
	};
	
	var calculator = new _Calculator2.default();
	
	var operations = {
	  add: _Operations2.default.add,
	  subtract: _Operations2.default.subtract,
	  multiply: _Operations2.default.multiply,
	  divide: _Operations2.default.divide,
	  equal: _Operations2.default.equal
	};
	
	window.addEventListener('load', function () {
	  /**
	   * Initiate calculator screen display
	   */
	  var screen = document.querySelector(selectors.screen);
	  screen.textContent = '' + calculator.displayValue;
	
	  /**
	   * Enable calculator digit buttons
	   */
	  var digitButtons = Array.prototype.slice.call(document.querySelectorAll(selectors.digitButtons));
	  digitButtons.forEach(function (button) {
	    button.addEventListener('click', function (event) {
	      calculator.appendDigit(event.target.textContent);
	      screen.textContent = '' + calculator.displayValue;
	    });
	  });
	  window.addEventListener('keypress', function (event) {
	    if (event.keyCode !== 46 && (event.keyCode < 48 || event.keyCode > 57)) return;
	    calculator.appendDigit(String.fromCharCode(event.keyCode));
	    screen.textContent = '' + calculator.displayValue;
	  });
	
	  /**
	   * Enable calcuator operation buttons
	   */
	  var operatorButtons = Array.prototype.slice.call(document.querySelectorAll(selectors.operatorButtons));
	  operatorButtons.forEach(function (button) {
	    button.addEventListener('click', function (event) {
	      calculator.applyOperation(operations[event.target.getAttribute(attributes.operation)]);
	      screen.textContent = '' + calculator.displayValue;
	    });
	  });
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Calculator module
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @module
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright Bill Robitske, Jr. 2017
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author    Bill Robitske, Jr. <bill.robitske.jr@gmail.com>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license   MIT
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	
	var _Operations = __webpack_require__(2);
	
	var _Operations2 = _interopRequireDefault(_Operations);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Calcuator encapsulation
	 *
	 * @class
	 */
	var Calculator = function () {
	  function Calculator() {
	    _classCallCheck(this, Calculator);
	
	    this.displayValue = '0';
	    this.isClear = true;
	    this.lastOperation = _Operations2.default.equal(0);
	  }
	
	  /**
	   * Clears the calculator number buffer; if already clear, clears operation
	   * buffer
	   *
	   * @returns {Calculator}  This calculator
	   */
	
	
	  _createClass(Calculator, [{
	    key: 'clear',
	    value: function clear() {
	      if (this.isClear) this.lastOperation = _Operations2.default.equal(0);
	      this.displayValue = '0';
	      this.isClear = true;
	      return this;
	    }
	
	    /**
	     * Appends a digit (or a decimal point) to number buffer, shifing the existing
	     * digits left.
	     *
	     * @param   {Number|String} digit Digit to append to number buffer
	     * @returns {Calculator}    This calculator
	     */
	
	  }, {
	    key: 'appendDigit',
	    value: function appendDigit(digit) {
	      if (('' + digit).match(/^[\d.]$/) === null) return this;
	      if ((this.isClear || this.displayValue === '0') && digit !== '.') {
	        this.displayValue = '' + digit;
	      } else {
	        this.displayValue = '' + this.displayValue + digit;
	      }
	      this.isClear = false;
	      return this;
	    }
	
	    /**
	     * Applies a new operation, evaluating the last selected operation with the
	     * current number buffer value and setting the number buffer as "cleared".
	     *
	     * @param   {Operation}   operation New operation to apply
	     * @returns {Calculator}  This calcuator
	     */
	
	  }, {
	    key: 'applyOperation',
	    value: function applyOperation(operation) {
	      this.displayValue = this.lastOperation(Number.parseFloat(this.displayValue));
	      this.lastOperation = operation(this.displayValue);
	      this.isClear = true;
	    }
	  }]);
	
	  return Calculator;
	}();
	
	exports.default = Calculator;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Calculator operations module
	 *
	 * @module
	 * @copyright Bill Robitske, Jr. 2017
	 * @author    Bill Robitske, Jr. <bill.robitske.jr@gmail.com>
	 * @license   MIT
	 */
	
	var Operations = function () {
	  function Operations() {
	    _classCallCheck(this, Operations);
	  }
	
	  _createClass(Operations, null, [{
	    key: "add",
	
	
	    /**
	     * Adds two terms
	     *
	     * @static
	     * @param   {Number}    addend1
	     * @returns {Function}  Function taking the second addend, and returning the
	     *                      sum
	     */
	    value: function add(addend1) {
	      return function (addend2) {
	        return addend1 + addend2;
	      };
	    }
	
	    /**
	     * Subtracts one term from another
	     *
	     * @static
	     * @param   {Number}    minuend
	     * @returns {Function}  Function taking the subtrahend and returning the
	     *                      difference
	     */
	
	  }, {
	    key: "subtract",
	    value: function subtract(minuend) {
	      return function (subtrahend) {
	        return minuend - subtrahend;
	      };
	    }
	
	    /**
	     * Multiplies two terms
	     *
	     * @static
	     * @param   {Number}    multiplicand
	     * @returns {Function}  Function taking the multiplier and returning the
	     *                      product
	     */
	
	  }, {
	    key: "multiply",
	    value: function multiply(multiplicand) {
	      return function (multiplier) {
	        return multiplicand * multiplier;
	      };
	    }
	
	    /**
	     * Divides one term from another
	     *
	     * @static
	     * @param   {Number}    numerator
	     * @returns {Function}  Function taking the denominator and returning the
	     *                      dividend
	     */
	
	  }, {
	    key: "divide",
	    value: function divide(numerator) {
	      return function (denominator) {
	        return numerator / denominator;
	      };
	    }
	
	    /**
	     * Returns the value (an identify function)
	     *
	     * @static
	     * @returns {Function}  Function taking a value and returning it
	     */
	
	  }, {
	    key: "equal",
	    value: function equal() {
	      return function (value) {
	        return value;
	      };
	    }
	  }]);
	
	  return Operations;
	}();
	
	exports.default = Operations;

/***/ }
/******/ ]);
//# sourceMappingURL=fcc-calculator.bundle.js.map