webpackHotUpdate(0,{

/***/ 1421:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(31);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar VariableTable = function VariableTable(_ref) {\n    var variables = _ref.variables;\n    return _react2.default.createElement(\n        'div',\n        { className: 'variableTable' },\n        _react2.default.createElement(\n            'div',\n            { className: 'title' },\n            'Current Variables'\n        ),\n        _react2.default.createElement(\n            'ul',\n            null,\n            _.map(_.sortBy(variables, function (v) {\n                return v.order;\n            }), function (x) {\n                return _react2.default.createElement(\n                    'li',\n                    null,\n                    _react2.default.createElement(\n                        'span',\n                        { className: 'three_quarter name' },\n                        x.name\n                    ),\n                    _react2.default.createElement(\n                        'span',\n                        { className: 'quarter' },\n                        x.value\n                    )\n                );\n            })\n        )\n    );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        variables: state.variables\n    };\n};\n\nVariableTable = (0, _reactRedux.connect)(mapStateToProps)(VariableTable);\n\nexports.default = VariableTable;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9WYXJpYWJsZVRhYmxlLmpzPzFiMDEiXSwibmFtZXMiOlsiVmFyaWFibGVUYWJsZSIsInZhcmlhYmxlcyIsIl8iLCJtYXAiLCJzb3J0QnkiLCJ2Iiwib3JkZXIiLCJ4IiwibmFtZSIsInZhbHVlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFJQSxnQkFBZ0I7QUFBQSxRQUFFQyxTQUFGLFFBQUVBLFNBQUY7QUFBQSxXQUNsQjtBQUFBO0FBQUEsVUFBSyxXQUFVLGVBQWY7QUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLFNBREo7QUFFSTtBQUFBO0FBQUE7QUFDSUMsY0FBRUMsR0FBRixDQUFNRCxFQUFFRSxNQUFGLENBQVNILFNBQVQsRUFBb0IsVUFBQ0ksQ0FBRCxFQUFPO0FBQy9CLHVCQUFPQSxFQUFFQyxLQUFUO0FBQ0gsYUFGTyxDQUFOLEVBR0EsVUFBQ0MsQ0FBRCxFQUFPO0FBQ0gsdUJBQU87QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLDBCQUFNLFdBQVUsb0JBQWhCO0FBQXVDQSwwQkFBRUM7QUFBekMscUJBQUo7QUFBMEQ7QUFBQTtBQUFBLDBCQUFNLFdBQVUsU0FBaEI7QUFBNEJELDBCQUFFRTtBQUE5QjtBQUExRCxpQkFBUDtBQUNILGFBTEQ7QUFESjtBQUZKLEtBRGtCO0FBQUEsQ0FBcEI7O0FBYUEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsV0FBWTtBQUNoQ1YsbUJBQVdVLE1BQU1WO0FBRGUsS0FBWjtBQUFBLENBQXhCOztBQUlBRCxnQkFBZ0IseUJBQVFVLGVBQVIsRUFBeUJWLGFBQXpCLENBQWhCOztrQkFFZUEsYSIsImZpbGUiOiIxNDIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmxldCBWYXJpYWJsZVRhYmxlID0gKHt2YXJpYWJsZXN9KSA9PlxuICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhYmxlVGFibGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5DdXJyZW50IFZhcmlhYmxlczwvZGl2PlxuICAgICAgPHVsPlxuICAgICAgICB7IF8ubWFwKF8uc29ydEJ5KHZhcmlhYmxlcywgKHYpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2Lm9yZGVyO1xuICAgICAgICB9KSxcbiAgICAgICAgICAoeCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPGxpPjxzcGFuIGNsYXNzTmFtZT1cInRocmVlX3F1YXJ0ZXIgbmFtZVwiPnsgeC5uYW1lIH08L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwicXVhcnRlclwiPnsgeC52YWx1ZSB9PC9zcGFuPjwvbGk+O1xuICAgICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgPC9kaXY+O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gICAgdmFyaWFibGVzOiBzdGF0ZS52YXJpYWJsZXMsXG59KTtcblxuVmFyaWFibGVUYWJsZSA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShWYXJpYWJsZVRhYmxlKTtcblxuZXhwb3J0IGRlZmF1bHQgVmFyaWFibGVUYWJsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL1ZhcmlhYmxlVGFibGUuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})