webpackHotUpdate(0,{

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.input = exports.InputBox = undefined;\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(30);\n\nvar _index = __webpack_require__(43);\n\nvar _python = __webpack_require__(61);\n\nvar _lodash = __webpack_require__(140);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// dom reference element for main user input box\nvar input = void 0;\n\n// helper to check whether history id (tracker in list) is not null (why does this exist??)\nvar doesHistoryExist = function doesHistoryExist(inputHistory) {\n    return inputHistory.currId !== null;\n};\n// get currently selected history element\nvar getCurrentHistory = function getCurrentHistory(inputHistory) {\n    return inputHistory.history.slice()[inputHistory.currId];\n};\n\n// key binder to grab special keystrokes in main input field\nvar _onKeyDown = function _onKeyDown(dispatch, inputHistory, e, predictions) {\n    var keyCode = e.keyCode || e.which;\n    // tab autocomplete\n    if (keyCode === 9) {\n        // tab\n        if (predictions.length > 0) {\n            var stripText = predictions[0].text.replace(/{/g, '').replace(/}/g, '');\n            input.value = stripText;\n            dispatch((0, _index.storeClassIndex)(predictions[0].class_index));\n            (0, _python.updateHint)(input.value);\n        }\n        e.preventDefault();\n    }\n    if (keyCode === 38) {\n        // up arrow\n        dispatch((0, _index.moveInputHistory)({ 'direction': 'up' }));\n        if (doesHistoryExist(inputHistory)) {\n            input.value = getCurrentHistory(inputHistory);\n        }\n    } else if (keyCode === 40) {\n        // down arrow\n        dispatch((0, _index.moveInputHistory)({ 'direction': 'down' }));\n        if (doesHistoryExist(inputHistory)) {\n            input.value = getCurrentHistory(inputHistory);\n        }\n    }\n};\n\n// store input value, and update hint and docs\nvar onChangeInput = function onChangeInput(dispatch) {\n    dispatch((0, _index.storeCurrentInput)(input.value));\n    (0, _python.updateHint)(input.value);\n    // updateDocs(input.value);\n};\n\n// this component defines main text input\nvar InputBox = function InputBox(_ref) {\n    var dispatch = _ref.dispatch,\n        inputHistory = _ref.inputHistory,\n        predictions = _ref.predictions,\n        classIndex = _ref.classIndex;\n    return _react2.default.createElement(\n        'div',\n        { className: 'input_box' },\n        _react2.default.createElement(\n            'form',\n            { onSubmit: function onSubmit(e) {\n                    e.preventDefault();\n                    dispatch((0, _index.addMessage)({ 'origin': 'user', 'text': [input.value], 'class_index': classIndex }));\n                    dispatch((0, _index.addInputHistory)({ 'message': input.value }));\n                    dispatch((0, _index.storeCurrentInput)(''));\n                    input.value = '';\n                } },\n            _react2.default.createElement('input', { onChange: function onChange() {\n                    return onChangeInput(dispatch);\n                }, onKeyDown: function onKeyDown(e) {\n                    return _onKeyDown(dispatch, inputHistory, e, predictions);\n                }, type: 'text', placeholder: 'your message here', ref: function ref(node) {\n                    exports.input = input = node;\n                } })\n        )\n    );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return _defineProperty({\n        inputHistory: state.inputHistory,\n        predictions: state.predictions\n    }, 'predictions', state.predictions);\n};\n\nexports.InputBox = InputBox = (0, _reactRedux.connect)(mapStateToProps)(InputBox);\n\nexports.InputBox = InputBox;\nexports.input = input;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9JbnB1dEJveC5qcz9jYzUxIl0sIm5hbWVzIjpbIl8iLCJpbnB1dCIsImRvZXNIaXN0b3J5RXhpc3QiLCJpbnB1dEhpc3RvcnkiLCJjdXJySWQiLCJnZXRDdXJyZW50SGlzdG9yeSIsImhpc3RvcnkiLCJzbGljZSIsIm9uS2V5RG93biIsImRpc3BhdGNoIiwiZSIsInByZWRpY3Rpb25zIiwia2V5Q29kZSIsIndoaWNoIiwibGVuZ3RoIiwic3RyaXBUZXh0IiwidGV4dCIsInJlcGxhY2UiLCJ2YWx1ZSIsImNsYXNzX2luZGV4IiwicHJldmVudERlZmF1bHQiLCJvbkNoYW5nZUlucHV0IiwiSW5wdXRCb3giLCJjbGFzc0luZGV4Iiwibm9kZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7SUFBWUEsQzs7Ozs7Ozs7QUFFWjtBQUNBLElBQUlDLGNBQUo7O0FBRUE7QUFDQSxJQUFNQyxtQkFBbUIsU0FBbkJBLGdCQUFtQixDQUFDQyxZQUFEO0FBQUEsV0FBa0JBLGFBQWFDLE1BQWIsS0FBd0IsSUFBMUM7QUFBQSxDQUF6QjtBQUNBO0FBQ0EsSUFBTUMsb0JBQW9CLFNBQXBCQSxpQkFBb0IsQ0FBQ0YsWUFBRDtBQUFBLFdBQWtCQSxhQUFhRyxPQUFiLENBQXFCQyxLQUFyQixHQUE2QkosYUFBYUMsTUFBMUMsQ0FBbEI7QUFBQSxDQUExQjs7QUFFQTtBQUNBLElBQU1JLGFBQVksU0FBWkEsVUFBWSxDQUFDQyxRQUFELEVBQVdOLFlBQVgsRUFBeUJPLENBQXpCLEVBQTRCQyxXQUE1QixFQUE0QztBQUMxRCxRQUFNQyxVQUFVRixFQUFFRSxPQUFGLElBQWFGLEVBQUVHLEtBQS9CO0FBQ0E7QUFDQSxRQUFJRCxZQUFZLENBQWhCLEVBQWtCO0FBQUU7QUFDbEIsWUFBR0QsWUFBWUcsTUFBWixHQUFxQixDQUF4QixFQUEwQjtBQUN4QixnQkFBSUMsWUFBWUosWUFBWSxDQUFaLEVBQWVLLElBQWYsQ0FBb0JDLE9BQXBCLENBQTRCLElBQTVCLEVBQWtDLEVBQWxDLEVBQXNDQSxPQUF0QyxDQUE4QyxJQUE5QyxFQUFvRCxFQUFwRCxDQUFoQjtBQUNBaEIsa0JBQU1pQixLQUFOLEdBQWNILFNBQWQ7QUFDQU4scUJBQVMsNEJBQWdCRSxZQUFZLENBQVosRUFBZVEsV0FBL0IsQ0FBVDtBQUNBLG9DQUFXbEIsTUFBTWlCLEtBQWpCO0FBQ0Q7QUFDRFIsVUFBRVUsY0FBRjtBQUNEO0FBQ0QsUUFBSVIsWUFBWSxFQUFoQixFQUFvQjtBQUFFO0FBQ2xCSCxpQkFBUyw2QkFBaUIsRUFBQyxhQUFhLElBQWQsRUFBakIsQ0FBVDtBQUNBLFlBQUlQLGlCQUFpQkMsWUFBakIsQ0FBSixFQUFvQztBQUNoQ0Ysa0JBQU1pQixLQUFOLEdBQWNiLGtCQUFrQkYsWUFBbEIsQ0FBZDtBQUNIO0FBQ0osS0FMRCxNQUtPLElBQUdTLFlBQVksRUFBZixFQUFtQjtBQUFFO0FBQ3hCSCxpQkFBUyw2QkFBaUIsRUFBQyxhQUFhLE1BQWQsRUFBakIsQ0FBVDtBQUNBLFlBQUlQLGlCQUFpQkMsWUFBakIsQ0FBSixFQUFvQztBQUNoQ0Ysa0JBQU1pQixLQUFOLEdBQWNiLGtCQUFrQkYsWUFBbEIsQ0FBZDtBQUNIO0FBQ0o7QUFDSixDQXZCRDs7QUF5QkE7QUFDQSxJQUFNa0IsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDWixRQUFELEVBQWM7QUFDaENBLGFBQVMsOEJBQWtCUixNQUFNaUIsS0FBeEIsQ0FBVDtBQUNBLDRCQUFXakIsTUFBTWlCLEtBQWpCO0FBQ0E7QUFDSCxDQUpEOztBQU1BO0FBQ0EsSUFBSUksV0FBVztBQUFBLFFBQUdiLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFFBQWFOLFlBQWIsUUFBYUEsWUFBYjtBQUFBLFFBQTJCUSxXQUEzQixRQUEyQkEsV0FBM0I7QUFBQSxRQUF3Q1ksVUFBeEMsUUFBd0NBLFVBQXhDO0FBQUEsV0FDWDtBQUFBO0FBQUEsVUFBSyxXQUFVLFdBQWY7QUFDSTtBQUFBO0FBQUEsY0FBTSxVQUFVLHFCQUFLO0FBQ2pCYixzQkFBRVUsY0FBRjtBQUNBWCw2QkFBUyx1QkFBVyxFQUFDLFVBQVUsTUFBWCxFQUFtQixRQUFRLENBQUNSLE1BQU1pQixLQUFQLENBQTNCLEVBQTBDLGVBQWVLLFVBQXpELEVBQVgsQ0FBVDtBQUNBZCw2QkFBUyw0QkFBZ0IsRUFBQyxXQUFXUixNQUFNaUIsS0FBbEIsRUFBaEIsQ0FBVDtBQUNBVCw2QkFBUyw4QkFBa0IsRUFBbEIsQ0FBVDtBQUNBUiwwQkFBTWlCLEtBQU4sR0FBYyxFQUFkO0FBQ0gsaUJBTkQ7QUFPSSxxREFBTyxVQUFVO0FBQUEsMkJBQU1HLGNBQWNaLFFBQWQsQ0FBTjtBQUFBLGlCQUFqQixFQUFnRCxXQUFXLG1CQUFDQyxDQUFEO0FBQUEsMkJBQU9GLFdBQVVDLFFBQVYsRUFBb0JOLFlBQXBCLEVBQWtDTyxDQUFsQyxFQUFxQ0MsV0FBckMsQ0FBUDtBQUFBLGlCQUEzRCxFQUFxSCxNQUFLLE1BQTFILEVBQWlJLGFBQVksbUJBQTdJLEVBQWlLLEtBQUssbUJBQVE7QUFBQyw0QkFZektWLEtBWnlLLFdBQVF1QixJQUFSO0FBQWMsaUJBQTdMO0FBUEo7QUFESixLQURXO0FBQUEsQ0FBZjs7QUFhQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQTtBQUNwQnZCLHNCQUFjdUIsTUFBTXZCLFlBREE7QUFFcEJRLHFCQUFhZSxNQUFNZjtBQUZDLHNCQUdQZSxNQUFNZixXQUhDO0FBQUEsQ0FBeEI7O0FBTUEsUUFFUVcsUUFGUixjQUFXLHlCQUFRRyxlQUFSLEVBQXlCSCxRQUF6QixDQUFYOztRQUVRQSxRLEdBQUFBLFE7UUFBVXJCLEssR0FBQUEsSyIsImZpbGUiOiIxMzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGFkZE1lc3NhZ2UsIGFkZElucHV0SGlzdG9yeSwgbW92ZUlucHV0SGlzdG9yeSwgc3RvcmVDdXJyZW50SW5wdXQsIHVwZGF0ZURvY0V2ZW50LCBzZXREb2NzLCBzdG9yZUNsYXNzSW5kZXggfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4LmpzJztcbmltcG9ydCB7IHVwZGF0ZUhpbnQsIHVwZGF0ZURvY3MgfSBmcm9tICcuLi9hcGlfY2FsbHMvcHl0aG9uLmpzJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuLy8gZG9tIHJlZmVyZW5jZSBlbGVtZW50IGZvciBtYWluIHVzZXIgaW5wdXQgYm94XG5sZXQgaW5wdXQ7XG5cbi8vIGhlbHBlciB0byBjaGVjayB3aGV0aGVyIGhpc3RvcnkgaWQgKHRyYWNrZXIgaW4gbGlzdCkgaXMgbm90IG51bGwgKHdoeSBkb2VzIHRoaXMgZXhpc3Q/PylcbmNvbnN0IGRvZXNIaXN0b3J5RXhpc3QgPSAoaW5wdXRIaXN0b3J5KSA9PiBpbnB1dEhpc3RvcnkuY3VycklkICE9PSBudWxsO1xuLy8gZ2V0IGN1cnJlbnRseSBzZWxlY3RlZCBoaXN0b3J5IGVsZW1lbnRcbmNvbnN0IGdldEN1cnJlbnRIaXN0b3J5ID0gKGlucHV0SGlzdG9yeSkgPT4gaW5wdXRIaXN0b3J5Lmhpc3Rvcnkuc2xpY2UoKVtpbnB1dEhpc3RvcnkuY3VycklkXTtcblxuLy8ga2V5IGJpbmRlciB0byBncmFiIHNwZWNpYWwga2V5c3Ryb2tlcyBpbiBtYWluIGlucHV0IGZpZWxkXG5jb25zdCBvbktleURvd24gPSAoZGlzcGF0Y2gsIGlucHV0SGlzdG9yeSwgZSwgcHJlZGljdGlvbnMpID0+IHtcbiAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlIHx8IGUud2hpY2g7XG4gICAgLy8gdGFiIGF1dG9jb21wbGV0ZVxuICAgIGlmIChrZXlDb2RlID09PSA5KXsgLy8gdGFiXG4gICAgICBpZihwcmVkaWN0aW9ucy5sZW5ndGggPiAwKXtcbiAgICAgICAgbGV0IHN0cmlwVGV4dCA9IHByZWRpY3Rpb25zWzBdLnRleHQucmVwbGFjZSgvey9nLCAnJykucmVwbGFjZSgvfS9nLCAnJyk7XG4gICAgICAgIGlucHV0LnZhbHVlID0gc3RyaXBUZXh0O1xuICAgICAgICBkaXNwYXRjaChzdG9yZUNsYXNzSW5kZXgocHJlZGljdGlvbnNbMF0uY2xhc3NfaW5kZXgpKTtcbiAgICAgICAgdXBkYXRlSGludChpbnB1dC52YWx1ZSk7XG4gICAgICB9XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGlmIChrZXlDb2RlID09PSAzOCkgeyAvLyB1cCBhcnJvd1xuICAgICAgICBkaXNwYXRjaChtb3ZlSW5wdXRIaXN0b3J5KHsnZGlyZWN0aW9uJzogJ3VwJ30pKTtcbiAgICAgICAgaWYgKGRvZXNIaXN0b3J5RXhpc3QoaW5wdXRIaXN0b3J5KSkge1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBnZXRDdXJyZW50SGlzdG9yeShpbnB1dEhpc3RvcnkpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmKGtleUNvZGUgPT09IDQwKSB7IC8vIGRvd24gYXJyb3dcbiAgICAgICAgZGlzcGF0Y2gobW92ZUlucHV0SGlzdG9yeSh7J2RpcmVjdGlvbic6ICdkb3duJ30pKTtcbiAgICAgICAgaWYgKGRvZXNIaXN0b3J5RXhpc3QoaW5wdXRIaXN0b3J5KSkge1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBnZXRDdXJyZW50SGlzdG9yeShpbnB1dEhpc3RvcnkpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLy8gc3RvcmUgaW5wdXQgdmFsdWUsIGFuZCB1cGRhdGUgaGludCBhbmQgZG9jc1xuY29uc3Qgb25DaGFuZ2VJbnB1dCA9IChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHN0b3JlQ3VycmVudElucHV0KGlucHV0LnZhbHVlKSk7XG4gICAgdXBkYXRlSGludChpbnB1dC52YWx1ZSk7XG4gICAgLy8gdXBkYXRlRG9jcyhpbnB1dC52YWx1ZSk7XG59O1xuXG4vLyB0aGlzIGNvbXBvbmVudCBkZWZpbmVzIG1haW4gdGV4dCBpbnB1dFxubGV0IElucHV0Qm94ID0gKHsgZGlzcGF0Y2gsIGlucHV0SGlzdG9yeSwgcHJlZGljdGlvbnMsIGNsYXNzSW5kZXggfSkgPT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0X2JveFwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkaXNwYXRjaChhZGRNZXNzYWdlKHsnb3JpZ2luJzogJ3VzZXInLCAndGV4dCc6IFtpbnB1dC52YWx1ZV0sICdjbGFzc19pbmRleCc6IGNsYXNzSW5kZXggfSkpO1xuICAgICAgICAgICAgZGlzcGF0Y2goYWRkSW5wdXRIaXN0b3J5KHsnbWVzc2FnZSc6IGlucHV0LnZhbHVlfSkpO1xuICAgICAgICAgICAgZGlzcGF0Y2goc3RvcmVDdXJyZW50SW5wdXQoJycpKTtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIH19PlxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZUlucHV0KGRpc3BhdGNoKX0gb25LZXlEb3duPXsoZSkgPT4gb25LZXlEb3duKGRpc3BhdGNoLCBpbnB1dEhpc3RvcnksIGUsIHByZWRpY3Rpb25zKX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInlvdXIgbWVzc2FnZSBoZXJlXCIgcmVmPXtub2RlID0+IHtpbnB1dCA9IG5vZGU7fX0+PC9pbnB1dD5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PjtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICAgIGlucHV0SGlzdG9yeTogc3RhdGUuaW5wdXRIaXN0b3J5LFxuICAgIHByZWRpY3Rpb25zOiBzdGF0ZS5wcmVkaWN0aW9ucyxcbiAgICBwcmVkaWN0aW9uczogc3RhdGUucHJlZGljdGlvbnMsXG59KTtcblxuSW5wdXRCb3ggPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSW5wdXRCb3gpO1xuXG5leHBvcnQge0lucHV0Qm94LCBpbnB1dH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29udGFpbmVycy9JbnB1dEJveC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})