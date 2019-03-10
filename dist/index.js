"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  font-family: ", ";\n  width: 100vw;\n  min-height: 100vh;\n  background: white;\n  padding: 20px;\n"], ["\n  font-family: ", ";\n  width: 100vw;\n  min-height: 100vh;\n  background: white;\n  padding: 20px;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  font-size: 40px;\n  text-transform: capitalize;\n  margin-bottom: 20px;\n  padding: 3px;\n  border-bottom: 1px solid #444;\n  max-width: 560px;\n"], ["\n  font-size: 40px;\n  text-transform: capitalize;\n  margin-bottom: 20px;\n  padding: 3px;\n  border-bottom: 1px solid #444;\n  max-width: 560px;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  font-weight: 100;\n"], ["\n  font-weight: 100;\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  font-weight: 100;\n  font-style: italic;\n"], ["\n  font-weight: 100;\n  font-style: italic;\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  font-weight: 200;\n"], ["\n  font-weight: 200;\n"]),
    _templateObject6 = _taggedTemplateLiteral(["\n  font-weight: 200;\n  font-style: italic;\n"], ["\n  font-weight: 200;\n  font-style: italic;\n"]),
    _templateObject7 = _taggedTemplateLiteral(["\n  font-weight: 300;\n"], ["\n  font-weight: 300;\n"]),
    _templateObject8 = _taggedTemplateLiteral(["\n  font-weight: 300;\n  font-style: italic;\n"], ["\n  font-weight: 300;\n  font-style: italic;\n"]),
    _templateObject9 = _taggedTemplateLiteral(["\n  font-weight: 400;\n"], ["\n  font-weight: 400;\n"]),
    _templateObject10 = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-style: italic;\n"], ["\n  font-weight: 400;\n  font-style: italic;\n"]),
    _templateObject11 = _taggedTemplateLiteral(["\n  font-weight: 500;\n"], ["\n  font-weight: 500;\n"]),
    _templateObject12 = _taggedTemplateLiteral(["\n  font-weight: 500;\n  font-style: italic;\n"], ["\n  font-weight: 500;\n  font-style: italic;\n"]),
    _templateObject13 = _taggedTemplateLiteral(["\n  font-weight: 600;\n"], ["\n  font-weight: 600;\n"]),
    _templateObject14 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-style: italic;\n"], ["\n  font-weight: 600;\n  font-style: italic;\n"]),
    _templateObject15 = _taggedTemplateLiteral(["\n  font-weight: 700;\n"], ["\n  font-weight: 700;\n"]),
    _templateObject16 = _taggedTemplateLiteral(["\n  font-weight: 700;\n  font-style: italic;\n"], ["\n  font-weight: 700;\n  font-style: italic;\n"]),
    _templateObject17 = _taggedTemplateLiteral(["\n  font-weight: 800;\n"], ["\n  font-weight: 800;\n"]),
    _templateObject18 = _taggedTemplateLiteral(["\n  font-weight: 800;\n  font-style: italic;\n"], ["\n  font-weight: 800;\n  font-style: italic;\n"]),
    _templateObject19 = _taggedTemplateLiteral(["\n  font-weight: 900;\n"], ["\n  font-weight: 900;\n"]),
    _templateObject20 = _taggedTemplateLiteral(["\n  font-weight: 900;\n  font-style: italic;\n"], ["\n  font-weight: 900;\n  font-style: italic;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styled = require("@emotion/styled");

var _styled2 = _interopRequireDefault(_styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FontContainer = (0, _styled2.default)("section")(_templateObject, function (props) {
  return props.fontFamily || "inherit";
});

var FontSample = (0, _styled2.default)("div")(_templateObject2);

var Thin = (0, _styled2.default)(FontSample)(_templateObject3);
var ThinItalic = (0, _styled2.default)(FontSample)(_templateObject4);

var ExtraLight = (0, _styled2.default)(FontSample)(_templateObject5);

var ExtraLightItalic = (0, _styled2.default)(FontSample)(_templateObject6);

var Light = (0, _styled2.default)(FontSample)(_templateObject7);

var LightItalic = (0, _styled2.default)(FontSample)(_templateObject8);

var Regular = (0, _styled2.default)(FontSample)(_templateObject9);

var RegularItalic = (0, _styled2.default)(FontSample)(_templateObject10);

var Medium = (0, _styled2.default)(FontSample)(_templateObject11);

var MediumItalic = (0, _styled2.default)(FontSample)(_templateObject12);

var SemiBold = (0, _styled2.default)(FontSample)(_templateObject13);

var SemiBoldItalic = (0, _styled2.default)(FontSample)(_templateObject14);

var Bold = (0, _styled2.default)(FontSample)(_templateObject15);

var BoldItalic = (0, _styled2.default)(FontSample)(_templateObject16);

var ExtraBold = (0, _styled2.default)(FontSample)(_templateObject17);

var ExtraBoldItalic = (0, _styled2.default)(FontSample)(_templateObject18);

var Black = (0, _styled2.default)(FontSample)(_templateObject19);

var BlackItalic = (0, _styled2.default)(FontSample)(_templateObject20);

var FontShowcase = function FontShowcase(fontFamily) {
  return _react2.default.createElement(
    FontContainer,
    null,
    _react2.default.createElement(
      Thin,
      { fontFamily: fontFamily },
      "thin"
    ),
    _react2.default.createElement(
      ThinItalic,
      { fontFamily: fontFamily },
      "thin italic"
    ),
    _react2.default.createElement(
      ExtraLight,
      { fontFamily: fontFamily },
      "Extra Light"
    ),
    _react2.default.createElement(
      ExtraLightItalic,
      { fontFamily: fontFamily },
      "Extra light italic"
    ),
    _react2.default.createElement(
      Light,
      { fontFamily: fontFamily },
      "Light"
    ),
    _react2.default.createElement(
      LightItalic,
      { fontFamily: fontFamily },
      "light italic"
    ),
    _react2.default.createElement(
      Regular,
      { fontFamily: fontFamily },
      "regular"
    ),
    _react2.default.createElement(
      RegularItalic,
      { fontFamily: fontFamily },
      "regular italic"
    ),
    _react2.default.createElement(
      Medium,
      { fontFamily: fontFamily },
      "medium"
    ),
    _react2.default.createElement(
      MediumItalic,
      { fontFamily: fontFamily },
      "medium italic"
    ),
    _react2.default.createElement(
      SemiBold,
      { fontFamily: fontFamily },
      "semi bold"
    ),
    _react2.default.createElement(
      SemiBoldItalic,
      { fontFamily: fontFamily },
      "semi bold italic"
    ),
    _react2.default.createElement(
      Bold,
      { fontFamily: fontFamily },
      "bold"
    ),
    _react2.default.createElement(
      BoldItalic,
      { fontFamily: fontFamily },
      "bold italic"
    ),
    _react2.default.createElement(
      ExtraBold,
      { fontFamily: fontFamily },
      "extra bold"
    ),
    _react2.default.createElement(
      ExtraBoldItalic,
      { fontFamily: fontFamily },
      "extra bold italic"
    ),
    _react2.default.createElement(
      Black,
      { fontFamily: fontFamily },
      "black"
    ),
    _react2.default.createElement(
      BlackItalic,
      { fontFamily: fontFamily },
      "black italic"
    )
  );
};

exports.default = FontShowcase;