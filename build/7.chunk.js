webpackJsonp([7],{

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ABOUT_TEXT = ["I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago. I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago. I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago. I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago. I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago. I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago. I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago. I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago. I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago. I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago. I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago. I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago. "];

var PatternBlock = function PatternBlock() {
  var pallete = [];
  var gradients = {
    up: {
      angle: Math.floor(Math.random() * 360),
      lines: [],
      source: ''
    },
    down: {
      angle: Math.floor(Math.random() * 360),
      lines: [],
      source: ''
    }
  };

  for (var i = 0; i < 3 + Math.random() * 3; i++) {
    pallete.push("rgb(var(--color-primary-default-source), ".concat(Math.random(), ")"));
  }

  for (var _i = 0; _i < 10 + Math.random() * 5; _i++) {
    var lastLine = !gradients.up.lines.length ? null : gradients.up.lines[gradients.up.lines.length - 1];
    gradients.up.lines.push({
      color: pallete[Math.floor(Math.random() * pallete.length)],
      width: 10 + Math.random() * 10,
      spacing: 0,
      start: lastLine ? lastLine.start + lastLine.width + lastLine.spacing : 0
    });
  }

  for (var _i2 = 0; _i2 < 10 + Math.random() * 5; _i2++) {
    var _lastLine = !gradients.down.lines.length ? null : gradients.down.lines[gradients.down.lines.length - 1];

    gradients.down.lines.push({
      color: pallete[Math.floor(Math.random() * pallete.length)],
      width: 10 + Math.random() * 10,
      spacing: 5 + Math.random() * 10,
      start: _lastLine ? _lastLine.start + _lastLine.width + _lastLine.spacing : 0
    });
  }

  gradients.up.source = "\n    repeating-linear-gradient(\n      ".concat(gradients.up.angle, "deg\n      ").concat(gradients.up.lines.map(function (l) {
    return ", transparent ".concat(l.start, "px, transparent ").concat(l.start + l.spacing, "px, ").concat(l.color, " ").concat(l.start + l.spacing, "px, ").concat(l.color, " ").concat(l.start + l.spacing + l.width, "px");
  }).join(''), "\n    )\n  ");
  gradients.down.source = "\n    repeating-linear-gradient(\n      ".concat(gradients.down.angle, "deg\n      ").concat(gradients.down.lines.map(function (l) {
    return ", transparent ".concat(l.start, "px, transparent ").concat(l.start + l.spacing, "px, ").concat(l.color, " ").concat(l.start + l.spacing, "px, ").concat(l.color, " ").concat(l.start + l.spacing + l.width, "px");
  }).join(''), "\n    )\n  ");
  var style = {
    backgroundImage: "".concat(gradients.up.source, ", ").concat(gradients.down.source)
  };
  return _react.default.createElement("div", {
    className: "page__content-pattern",
    style: style
  });
};

var About =
/*#__PURE__*/
function (_React$Component) {
  _inherits(About, _React$Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, _getPrototypeOf(About).apply(this, arguments));
  }

  _createClass(About, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "page__container"
      }, _react.default.createElement("div", {
        className: "page__title"
      }, "About"), _react.default.createElement("div", {
        className: "page__content"
      }, ABOUT_TEXT.map(function (t, i) {
        return _react.default.createElement("div", {
          key: i,
          className: "page__content-block"
        }, _react.default.createElement("div", {
          className: "page__content-text"
        }, t), _react.default.createElement(PatternBlock, null));
      })));
    }
  }]);

  return About;
}(_react.default.Component);

var _default = About;
exports.default = _default;

/***/ })

});