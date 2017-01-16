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
	
	var _calculatorDisplay = __webpack_require__(1);
	
	var _calculatorDisplay2 = _interopRequireDefault(_calculatorDisplay);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var selectors = {
	  screen: '.c-calculator__screen',
	  digitButtons: '.c-calculator__digit-button, .c-calculator__zero-button'
	}; /**
	    * Calculator app
	    *
	    * @copyright Bill Robitske, Jr. 2017
	    * @author Bill Robitske, Jr. <bill.robitske.jr@gmail.com>
	    * @license MIT
	    */
	
	
	window.addEventListener('load', function () {
	  var digitButtons = Array.prototype.slice.call(document.querySelectorAll(selectors.digitButtons));
	  digitButtons.forEach(function (button) {
	    button.addEventListener('click', function (event) {
	      var screen = document.querySelector(selectors.screen);
	      screen.textContent = _calculatorDisplay2.default.addDigitToValue(screen.textContent, event.target.textContent);
	    });
	  });
	  window.addEventListener('keypress', function (event) {
	    if (event.keyCode !== 46 && (event.keyCode < 48 || event.keyCode > 57)) return;
	    var screen = document.querySelector(selectors.screen);
	    screen.textContent = _calculatorDisplay2.default.addDigitToValue(screen.textContent, String.fromCharCode(event.keyCode));
	  });
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Calculator display module
	 *
	 * @module
	 * @copyright Bill Roibtske, Jr. 2017
	 * @author Bill Robitske, Jr. <bill.robitske.jr@gmail.com>
	 * @license MIT
	 */
	
	var _class = function () {
	  function _class() {
	    _classCallCheck(this, _class);
	  }
	
	  _createClass(_class, null, [{
	    key: 'addDigitToValue',
	    value: function addDigitToValue(curValue, digit) {
	      if (digit === '.' && curValue.indexOf(digit) !== -1) return curValue;
	      if (curValue === '0' && digit !== '.') return digit;
	      return curValue + digit;
	    }
	  }]);

	  return _class;
	}();

	exports.default = _class;

/***/ }
/******/ ]);
//# sourceMappingURL=fcc-calculator.bundle.js.map