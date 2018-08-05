webpackJsonp([1],{

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

__webpack_require__(85);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props));
    _this.state = {
      parallax: 0
    };
    _this.onDocumentScroll = _this.onDocumentScroll.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('scroll', this.onDocumentScroll);
      this.onDocumentScroll();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('scroll', this.onDocumentScroll);
    }
  }, {
    key: "onDocumentScroll",
    value: function onDocumentScroll() {
      var offsetY = window.pageYOffset;
      this.setState({
        parallax: offsetY / 5
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "home"
      }, _react.default.createElement("div", {
        className: "home__banner"
      }, _react.default.createElement("div", {
        className: "home__banner-text",
        style: {
          bottom: this.state.parallax * 6
        }
      }, _react.default.createElement("span", null, "SOFT"), _react.default.createElement("span", {
        className: "home__banner-letters--transparent"
      }, "WARE "), _react.default.createElement("span", {
        className: "home__banner-letters--transparent"
      }, "ENGI"), _react.default.createElement("span", {
        className: "home__banner-letters--transparent"
      }, "NEER")), _react.default.createElement("div", {
        className: "home__banner-text",
        style: {
          bottom: this.state.parallax * 4
        }
      }, _react.default.createElement("span", {
        className: "home__banner-letters--transparent"
      }, "SOFT"), _react.default.createElement("span", null, "WARE "), _react.default.createElement("span", {
        className: "home__banner-letters--transparent"
      }, "ENGI"), _react.default.createElement("span", {
        className: "home__banner-letters--transparent"
      }, "NEER")), _react.default.createElement("div", {
        className: "home__banner-text",
        style: {
          bottom: this.state.parallax * 2
        }
      }, _react.default.createElement("span", {
        className: "home__banner-letters--transparent"
      }, "SOFT"), _react.default.createElement("span", {
        className: "home__banner-letters--transparent"
      }, "WARE "), _react.default.createElement("span", null, "ENGI"), _react.default.createElement("span", {
        className: "home__banner-letters--transparent"
      }, "NEER")), _react.default.createElement("div", {
        className: "home__banner-text",
        style: {
          bottom: this.state.parallax * 0
        }
      }, _react.default.createElement("span", {
        className: "home__banner-letters--transparent"
      }, "SOFT"), _react.default.createElement("span", {
        className: "home__banner-letters--transparent"
      }, "WARE "), _react.default.createElement("span", {
        className: "home__banner-letters--transparent"
      }, "ENGI"), _react.default.createElement("span", null, "NEER"))), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"), _react.default.createElement("div", null, "sdakfjskadf"));
    }
  }]);

  return Home;
}(_react.default.Component);

var _default = Home;
exports.default = _default;

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(22)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./home.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./home.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".home {\n  position: absolute;\n  top: 0px; left: 0px;\n  width: 100%; height: 100%;\n}\n\n.home__banner {\n  position: relative;\n  min-height: 30rem;\n  height: 100vh; width: 100%;\n  overflow: hidden;\n\n  background-image: linear-gradient(var(--color-primary-default), rgba(var(--color-primary-default-source), 0.5));\n}\n\n.home__banner-text {\n  position: absolute;\n  bottom: 0; left: 0;\n  width: 100%;\n  text-align: center;\n  font-size: 6rem;\n  font-weight: var(--font-weight-extra-bold);\n  padding: var(--spacing-0) var(--spacing-4);\n  font-family: var(--font-family-secondary);\n}\n\n.home__banner-letters--transparent {\n  opacity: 0.25;\n}\n", ""]);

// exports


/***/ })

});