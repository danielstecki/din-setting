/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dinSetting = __webpack_require__(1);

var _dinSetting2 = _interopRequireDefault(_dinSetting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {
  weight: 212,
  height: 78,
  sole: 270,
  age: 30,
  type: 1
};

console.log(new _dinSetting2.default(options));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* An incorrect din setting can cause serious injury to the skier.
A trained professional should recalculate the results of this script */

// constants from rossignols 2016 din settings chart
var WEIGHT_SCALE = [30, 39, 48, 57, 67, 79, 92, 108, 126, 148, 175, 210];
var HEIGHT_SCALE = [59, 62, 66, 71, 77];
var SOLE_SCALE = [230, 250, 270, 290, 310, 330, 350];
var DIN_CHART = [[0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75], [1, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75], [1.5, 1.25, 1.25, 1, 1, 1, 1, 1], [2, 1.75, 1.5, 1.5, 1.25, 1.25, 1.25, 1.25], [2.5, 2.25, 2, 1.75, 1.5, 1.5, 1.5, 1.5], [3, 2.75, 2.5, 2.25, 2, 1.75, 1.75, 1.75], [3.5, 3.5, 3, 2.75, 2.5, 2.25, 2, 2], [3.5, 3.5, 3.5, 3, 3, 2.75, 2.5, 2.5], [4.5, 4.5, 4.5, 4, 3.5, 3.5, 3, 3], [5.5, 5.5, 5.5, 5, 4.5, 4, 3.5, 3], [6.5, 6.5, 6.5, 6, 5.5, 5, 4.5, 4], [7.5, 7.5, 7.5, 7, 6.5, 6, 5.5, 5], [8.5, 8.5, 8.5, 8, 8, 7, 6.5, 6], [10, 10, 10, 10, 9.5, 8.5, 8, 7.5], [11.5, 11.5, 11.5, 11.5, 11, 10, 9.5, 9], [12, 12, 12, 12, 12, 12, 11, 10.5]];

var DinSetting = function () {
  function DinSetting(options) {
    _classCallCheck(this, DinSetting);

    this.options = _extends({
      weight: 30,
      height: 59,
      type: 1,
      age: 1,
      sole: 230
    }, options);

    return { dinSetting: this.calcDinSetting() };
  }

  _createClass(DinSetting, [{
    key: "calcDinSetting",
    value: function calcDinSetting() {
      return DIN_CHART[this.getSkierCode()][this.getIndicatorSetting()];
    }
  }, {
    key: "getSkierCode",
    value: function getSkierCode() {
      var _options = this.options,
          weight = _options.weight,
          height = _options.height,
          type = _options.type,
          age = _options.age;

      var wIndex = this.getWeightIndex(weight);
      var hIndex = this.getHeightIndex(height);

      var index = wIndex <= hIndex ? wIndex : hIndex;

      if (age <= 9 || age >= 50) index -= 1;
      if (weight < 48 && type === 3) return index += 1;
      if (type === 2) index += 1;
      if (type === 3) index += 2;

      return index;
    }
  }, {
    key: "getWeightIndex",
    value: function getWeightIndex() {
      var weight = this.options.weight;


      if (weight >= 210) return WEIGHT_SCALE.length;
      return WEIGHT_SCALE.findIndex(function (e) {
        return weight < e;
      });
    }
  }, {
    key: "getHeightIndex",
    value: function getHeightIndex() {
      var height = this.options.height;

      // account for HEIGHT_SCALE having less values

      var differential = WEIGHT_SCALE.length - HEIGHT_SCALE.length;
      if (height >= 77) return HEIGHT_SCALE.length + differential;
      return HEIGHT_SCALE.findIndex(function (e) {
        return height < e;
      }) + differential;
    }
  }, {
    key: "getIndicatorSetting",
    value: function getIndicatorSetting() {
      var sole = this.options.sole;


      if (sole >= 351) return SOLE_SCALE.length;
      return SOLE_SCALE.findIndex(function (e) {
        return sole < e;
      });
    }
  }]);

  return DinSetting;
}();

exports.default = DinSetting;

/***/ })
/******/ ]);