webpackHotUpdate(0,{

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.input = exports.InputBox = undefined;\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(30);\n\nvar _index = __webpack_require__(43);\n\nvar _python = __webpack_require__(61);\n\nvar _lodash = __webpack_require__(140);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// dom reference element for main user input box\nvar input = void 0;\n\n// helper to check whether history id (tracker in list) is not null (why does this exist??)\nvar notNull = function notNull(inputHistory) {\n    return inputHistory.currId !== null;\n};\n// get currently selected history element\nvar getCurrentHistory = function getCurrentHistory(inputHistory) {\n    return _.reverse(inputHistory.history.slice())[inputHistory.currId];\n};\n\n// key binder to interact with history\nvar _onKeyDown = function _onKeyDown(dispatch, inputHistory, e, predictions) {\n    var keyCode = e.keyCode || e.which;\n    // so this is great, but tab completion has nothing to do with history...\n    if (keyCode === 9) {\n        // tab\n        if (predictions.length > 0) {\n            var stripText = predictions[0].text.replace(/{/g, '').replace(/}/g, '');\n            input.value = stripText;\n            (0, _python.updateHint)(input.value);\n        }\n        e.preventDefault();\n    }\n    if (keyCode === 38) {\n        // up arrow\n        dispatch((0, _index.moveInputHistory)({ 'direction': 'up' }));\n        if (notNull(inputHistory)) {\n            input.value = getCurrentHistory(inputHistory);\n        }\n    } else if (keyCode === 40) {\n        // down arrow\n        dispatch((0, _index.moveInputHistory)({ 'direction': 'down' }));\n        if (notNull(inputHistory)) {\n            input.value = getCurrentHistory(inputHistory);\n        }\n    }\n};\n\nvar onChangeInput = function onChangeInput(dispatch) {\n    dispatch((0, _index.storeCurrentInput)(input.value));\n    (0, _python.updateHint)(input.value);\n    (0, _python.updateDocs)(input.value);\n};\n\nvar lookup_func = function lookup_func(dispatch, minimizeState, currMessages) {\n    dispatch((0, _index.setDocs)({ docs: !minimizeState.docs }));\n    if (currMessages.length > 0) {\n        // console.log(currMessages);\n        (0, _python.updateDocs)(currMessages[0].text);\n    } else {\n        (0, _python.updateDocs)(input.value);\n    }\n};\n\n// input goes here\nvar InputBox = function InputBox(_ref) {\n    var dispatch = _ref.dispatch,\n        inputHistory = _ref.inputHistory,\n        predictions = _ref.predictions;\n    return _react2.default.createElement(\n        'div',\n        { className: 'input_box' },\n        _react2.default.createElement(\n            'form',\n            { onSubmit: function onSubmit(e) {\n                    e.preventDefault();\n                    dispatch((0, _index.addMessage)({ 'origin': 'user', 'text': [input.value] }));\n                    dispatch((0, _index.addInputHistory)({ 'message': input.value }));\n                    dispatch((0, _index.storeCurrentInput)(''));\n                    input.value = '';\n                } },\n            _react2.default.createElement('input', { onChange: function onChange() {\n                    return onChangeInput(dispatch);\n                }, onKeyDown: function onKeyDown(e) {\n                    return _onKeyDown(dispatch, inputHistory, e, predictions);\n                }, type: 'text', placeholder: 'your message here', ref: function ref(node) {\n                    exports.input = input = node;\n                } })\n        )\n    );\n};\n\nInputBox.propTypes = {\n    dispatch: _react.PropTypes.func,\n    inputHistory: _react.PropTypes.any,\n    predictions: _react.PropTypes.any\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        inputHistory: state.inputHistory,\n        predictions: state.predictions\n    };\n};\n\nexports.InputBox = InputBox = (0, _reactRedux.connect)(mapStateToProps)(InputBox);\n\nexports.InputBox = InputBox;\nexports.input = input;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9JbnB1dEJveC5qcz9jYzUxIl0sIm5hbWVzIjpbIl8iLCJpbnB1dCIsIm5vdE51bGwiLCJpbnB1dEhpc3RvcnkiLCJjdXJySWQiLCJnZXRDdXJyZW50SGlzdG9yeSIsInJldmVyc2UiLCJoaXN0b3J5Iiwic2xpY2UiLCJvbktleURvd24iLCJkaXNwYXRjaCIsImUiLCJwcmVkaWN0aW9ucyIsImtleUNvZGUiLCJ3aGljaCIsImxlbmd0aCIsInN0cmlwVGV4dCIsInRleHQiLCJyZXBsYWNlIiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsIm9uQ2hhbmdlSW5wdXQiLCJsb29rdXBfZnVuYyIsIm1pbmltaXplU3RhdGUiLCJjdXJyTWVzc2FnZXMiLCJkb2NzIiwiSW5wdXRCb3giLCJub2RlIiwicHJvcFR5cGVzIiwiZnVuYyIsImFueSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7SUFBWUEsQzs7Ozs7O0FBRVo7QUFDQSxJQUFJQyxjQUFKOztBQUVBO0FBQ0EsSUFBTUMsVUFBVSxTQUFWQSxPQUFVLENBQUNDLFlBQUQ7QUFBQSxXQUFrQkEsYUFBYUMsTUFBYixLQUF3QixJQUExQztBQUFBLENBQWhCO0FBQ0E7QUFDQSxJQUFNQyxvQkFBb0IsU0FBcEJBLGlCQUFvQixDQUFDRixZQUFEO0FBQUEsV0FBa0JILEVBQUVNLE9BQUYsQ0FBVUgsYUFBYUksT0FBYixDQUFxQkMsS0FBckIsRUFBVixFQUF3Q0wsYUFBYUMsTUFBckQsQ0FBbEI7QUFBQSxDQUExQjs7QUFFQTtBQUNBLElBQU1LLGFBQVksU0FBWkEsVUFBWSxDQUFDQyxRQUFELEVBQVdQLFlBQVgsRUFBeUJRLENBQXpCLEVBQTRCQyxXQUE1QixFQUE0QztBQUMxRCxRQUFNQyxVQUFVRixFQUFFRSxPQUFGLElBQWFGLEVBQUVHLEtBQS9CO0FBQ0E7QUFDQSxRQUFJRCxZQUFZLENBQWhCLEVBQWtCO0FBQUU7QUFDbEIsWUFBR0QsWUFBWUcsTUFBWixHQUFxQixDQUF4QixFQUEwQjtBQUN4QixnQkFBSUMsWUFBWUosWUFBWSxDQUFaLEVBQWVLLElBQWYsQ0FBb0JDLE9BQXBCLENBQTRCLElBQTVCLEVBQWtDLEVBQWxDLEVBQXNDQSxPQUF0QyxDQUE4QyxJQUE5QyxFQUFvRCxFQUFwRCxDQUFoQjtBQUNBakIsa0JBQU1rQixLQUFOLEdBQWNILFNBQWQ7QUFDQSxvQ0FBV2YsTUFBTWtCLEtBQWpCO0FBQ0Q7QUFDRFIsVUFBRVMsY0FBRjtBQUNEO0FBQ0QsUUFBSVAsWUFBWSxFQUFoQixFQUFvQjtBQUFFO0FBQ2xCSCxpQkFBUyw2QkFBaUIsRUFBQyxhQUFhLElBQWQsRUFBakIsQ0FBVDtBQUNBLFlBQUlSLFFBQVFDLFlBQVIsQ0FBSixFQUEyQjtBQUN2QkYsa0JBQU1rQixLQUFOLEdBQWNkLGtCQUFrQkYsWUFBbEIsQ0FBZDtBQUNIO0FBQ0osS0FMRCxNQUtPLElBQUdVLFlBQVksRUFBZixFQUFtQjtBQUFFO0FBQ3hCSCxpQkFBUyw2QkFBaUIsRUFBQyxhQUFhLE1BQWQsRUFBakIsQ0FBVDtBQUNBLFlBQUlSLFFBQVFDLFlBQVIsQ0FBSixFQUEyQjtBQUN2QkYsa0JBQU1rQixLQUFOLEdBQWNkLGtCQUFrQkYsWUFBbEIsQ0FBZDtBQUNIO0FBQ0o7QUFDSixDQXRCRDs7QUF3QkEsSUFBTWtCLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ1gsUUFBRCxFQUFjO0FBQ2hDQSxhQUFTLDhCQUFrQlQsTUFBTWtCLEtBQXhCLENBQVQ7QUFDQSw0QkFBV2xCLE1BQU1rQixLQUFqQjtBQUNBLDRCQUFXbEIsTUFBTWtCLEtBQWpCO0FBQ0gsQ0FKRDs7QUFNQSxJQUFNRyxjQUFjLFNBQWRBLFdBQWMsQ0FBQ1osUUFBRCxFQUFXYSxhQUFYLEVBQTBCQyxZQUExQixFQUEyQztBQUM3RGQsYUFBUyxvQkFBUSxFQUFDZSxNQUFLLENBQUNGLGNBQWNFLElBQXJCLEVBQVIsQ0FBVDtBQUNBLFFBQUlELGFBQWFULE1BQWIsR0FBc0IsQ0FBMUIsRUFBNEI7QUFDMUI7QUFDQSxnQ0FBV1MsYUFBYSxDQUFiLEVBQWdCUCxJQUEzQjtBQUNELEtBSEQsTUFJSTtBQUNGLGdDQUFXaEIsTUFBTWtCLEtBQWpCO0FBQ0Q7QUFDRixDQVREOztBQVdBO0FBQ0EsSUFBSU8sV0FBVztBQUFBLFFBQUdoQixRQUFILFFBQUdBLFFBQUg7QUFBQSxRQUFhUCxZQUFiLFFBQWFBLFlBQWI7QUFBQSxRQUEyQlMsV0FBM0IsUUFBMkJBLFdBQTNCO0FBQUEsV0FDWDtBQUFBO0FBQUEsVUFBSyxXQUFVLFdBQWY7QUFDSTtBQUFBO0FBQUEsY0FBTSxVQUFVLHFCQUFLO0FBQ2pCRCxzQkFBRVMsY0FBRjtBQUNBViw2QkFBUyx1QkFBVyxFQUFDLFVBQVUsTUFBWCxFQUFtQixRQUFRLENBQUNULE1BQU1rQixLQUFQLENBQTNCLEVBQVgsQ0FBVDtBQUNBVCw2QkFBUyw0QkFBZ0IsRUFBQyxXQUFXVCxNQUFNa0IsS0FBbEIsRUFBaEIsQ0FBVDtBQUNBVCw2QkFBUyw4QkFBa0IsRUFBbEIsQ0FBVDtBQUNBVCwwQkFBTWtCLEtBQU4sR0FBYyxFQUFkO0FBQ0gsaUJBTkQ7QUFPSSxxREFBTyxVQUFVO0FBQUEsMkJBQU1FLGNBQWNYLFFBQWQsQ0FBTjtBQUFBLGlCQUFqQixFQUFnRCxXQUFXLG1CQUFDQyxDQUFEO0FBQUEsMkJBQU9GLFdBQVVDLFFBQVYsRUFBb0JQLFlBQXBCLEVBQWtDUSxDQUFsQyxFQUFxQ0MsV0FBckMsQ0FBUDtBQUFBLGlCQUEzRCxFQUFxSCxNQUFLLE1BQTFILEVBQWlJLGFBQVksbUJBQTdJLEVBQWlLLEtBQUssbUJBQVE7QUFBQyw0QkFpQnpLWCxLQWpCeUssV0FBUTBCLElBQVI7QUFBYyxpQkFBN0w7QUFQSjtBQURKLEtBRFc7QUFBQSxDQUFmOztBQWFBRCxTQUFTRSxTQUFULEdBQXFCO0FBQ2pCbEIsY0FBVSxpQkFBVW1CLElBREg7QUFFakIxQixrQkFBYyxpQkFBVTJCLEdBRlA7QUFHakJsQixpQkFBYSxpQkFBVWtCO0FBSE4sQ0FBckI7O0FBTUEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsV0FBWTtBQUNoQzdCLHNCQUFjNkIsTUFBTTdCLFlBRFk7QUFFaENTLHFCQUFhb0IsTUFBTXBCO0FBRmEsS0FBWjtBQUFBLENBQXhCOztBQUtBLFFBRVFjLFFBRlIsY0FBVyx5QkFBUUssZUFBUixFQUF5QkwsUUFBekIsQ0FBWDs7UUFFUUEsUSxHQUFBQSxRO1FBQVV6QixLLEdBQUFBLEsiLCJmaWxlIjoiMTMwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBhZGRNZXNzYWdlLCBhZGRJbnB1dEhpc3RvcnksIG1vdmVJbnB1dEhpc3RvcnksIHN0b3JlQ3VycmVudElucHV0LCB1cGRhdGVEb2NFdmVudCwgc2V0RG9jcyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXguanMnO1xuaW1wb3J0IHsgdXBkYXRlSGludCwgdXBkYXRlRG9jcyB9IGZyb20gJy4uL2FwaV9jYWxscy9weXRob24uanMnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG4vLyBkb20gcmVmZXJlbmNlIGVsZW1lbnQgZm9yIG1haW4gdXNlciBpbnB1dCBib3hcbmxldCBpbnB1dDtcblxuLy8gaGVscGVyIHRvIGNoZWNrIHdoZXRoZXIgaGlzdG9yeSBpZCAodHJhY2tlciBpbiBsaXN0KSBpcyBub3QgbnVsbCAod2h5IGRvZXMgdGhpcyBleGlzdD8/KVxuY29uc3Qgbm90TnVsbCA9IChpbnB1dEhpc3RvcnkpID0+IGlucHV0SGlzdG9yeS5jdXJySWQgIT09IG51bGw7XG4vLyBnZXQgY3VycmVudGx5IHNlbGVjdGVkIGhpc3RvcnkgZWxlbWVudFxuY29uc3QgZ2V0Q3VycmVudEhpc3RvcnkgPSAoaW5wdXRIaXN0b3J5KSA9PiBfLnJldmVyc2UoaW5wdXRIaXN0b3J5Lmhpc3Rvcnkuc2xpY2UoKSlbaW5wdXRIaXN0b3J5LmN1cnJJZF07XG5cbi8vIGtleSBiaW5kZXIgdG8gaW50ZXJhY3Qgd2l0aCBoaXN0b3J5XG5jb25zdCBvbktleURvd24gPSAoZGlzcGF0Y2gsIGlucHV0SGlzdG9yeSwgZSwgcHJlZGljdGlvbnMpID0+IHtcbiAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlIHx8IGUud2hpY2g7XG4gICAgLy8gc28gdGhpcyBpcyBncmVhdCwgYnV0IHRhYiBjb21wbGV0aW9uIGhhcyBub3RoaW5nIHRvIGRvIHdpdGggaGlzdG9yeS4uLlxuICAgIGlmIChrZXlDb2RlID09PSA5KXsgLy8gdGFiXG4gICAgICBpZihwcmVkaWN0aW9ucy5sZW5ndGggPiAwKXtcbiAgICAgICAgbGV0IHN0cmlwVGV4dCA9IHByZWRpY3Rpb25zWzBdLnRleHQucmVwbGFjZSgvey9nLCAnJykucmVwbGFjZSgvfS9nLCAnJyk7XG4gICAgICAgIGlucHV0LnZhbHVlID0gc3RyaXBUZXh0O1xuICAgICAgICB1cGRhdGVIaW50KGlucHV0LnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgaWYgKGtleUNvZGUgPT09IDM4KSB7IC8vIHVwIGFycm93XG4gICAgICAgIGRpc3BhdGNoKG1vdmVJbnB1dEhpc3RvcnkoeydkaXJlY3Rpb24nOiAndXAnfSkpO1xuICAgICAgICBpZiAobm90TnVsbChpbnB1dEhpc3RvcnkpKSB7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGdldEN1cnJlbnRIaXN0b3J5KGlucHV0SGlzdG9yeSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYoa2V5Q29kZSA9PT0gNDApIHsgLy8gZG93biBhcnJvd1xuICAgICAgICBkaXNwYXRjaChtb3ZlSW5wdXRIaXN0b3J5KHsnZGlyZWN0aW9uJzogJ2Rvd24nfSkpO1xuICAgICAgICBpZiAobm90TnVsbChpbnB1dEhpc3RvcnkpKSB7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGdldEN1cnJlbnRIaXN0b3J5KGlucHV0SGlzdG9yeSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5jb25zdCBvbkNoYW5nZUlucHV0ID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goc3RvcmVDdXJyZW50SW5wdXQoaW5wdXQudmFsdWUpKTtcbiAgICB1cGRhdGVIaW50KGlucHV0LnZhbHVlKTtcbiAgICB1cGRhdGVEb2NzKGlucHV0LnZhbHVlKTtcbn07XG5cbmNvbnN0IGxvb2t1cF9mdW5jID0gKGRpc3BhdGNoLCBtaW5pbWl6ZVN0YXRlLCBjdXJyTWVzc2FnZXMpID0+IHtcbiAgZGlzcGF0Y2goc2V0RG9jcyh7ZG9jczohbWluaW1pemVTdGF0ZS5kb2NzfSkpXG4gIGlmIChjdXJyTWVzc2FnZXMubGVuZ3RoID4gMCl7XG4gICAgLy8gY29uc29sZS5sb2coY3Vyck1lc3NhZ2VzKTtcbiAgICB1cGRhdGVEb2NzKGN1cnJNZXNzYWdlc1swXS50ZXh0KTtcbiAgfVxuICBlbHNle1xuICAgIHVwZGF0ZURvY3MoaW5wdXQudmFsdWUpO1xuICB9XG59XG5cbi8vIGlucHV0IGdvZXMgaGVyZVxubGV0IElucHV0Qm94ID0gKHsgZGlzcGF0Y2gsIGlucHV0SGlzdG9yeSwgcHJlZGljdGlvbnMgfSkgPT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0X2JveFwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkaXNwYXRjaChhZGRNZXNzYWdlKHsnb3JpZ2luJzogJ3VzZXInLCAndGV4dCc6IFtpbnB1dC52YWx1ZV0gfSkpO1xuICAgICAgICAgICAgZGlzcGF0Y2goYWRkSW5wdXRIaXN0b3J5KHsnbWVzc2FnZSc6IGlucHV0LnZhbHVlfSkpO1xuICAgICAgICAgICAgZGlzcGF0Y2goc3RvcmVDdXJyZW50SW5wdXQoJycpKTtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIH19PlxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZUlucHV0KGRpc3BhdGNoKX0gb25LZXlEb3duPXsoZSkgPT4gb25LZXlEb3duKGRpc3BhdGNoLCBpbnB1dEhpc3RvcnksIGUsIHByZWRpY3Rpb25zKX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInlvdXIgbWVzc2FnZSBoZXJlXCIgcmVmPXtub2RlID0+IHtpbnB1dCA9IG5vZGU7fX0+PC9pbnB1dD5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PjtcblxuSW5wdXRCb3gucHJvcFR5cGVzID0ge1xuICAgIGRpc3BhdGNoOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpbnB1dEhpc3Rvcnk6IFByb3BUeXBlcy5hbnksXG4gICAgcHJlZGljdGlvbnM6IFByb3BUeXBlcy5hbnlcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgICBpbnB1dEhpc3Rvcnk6IHN0YXRlLmlucHV0SGlzdG9yeSxcbiAgICBwcmVkaWN0aW9uczogc3RhdGUucHJlZGljdGlvbnMsXG59KTtcblxuSW5wdXRCb3ggPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSW5wdXRCb3gpO1xuXG5leHBvcnQge0lucHV0Qm94LCBpbnB1dH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29udGFpbmVycy9JbnB1dEJveC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})