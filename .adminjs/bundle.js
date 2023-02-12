(function (designSystem, adminjs, React) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var PasswordEdit = function PasswordEdit(props) {
    var onChange = props.onChange,
      property = props.property,
      record = props.record,
      resource = props.resource;
    var _useTranslation = adminjs.useTranslation(),
      tb = _useTranslation.translateButton;
    var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showPassword = _useState2[0],
      togglePassword = _useState2[1];
    React.useEffect(function () {
      if (!showPassword) {
        onChange(property.name, '');
      }
    }, [onChange, showPassword]);

    // For new records always show the property
    if (!record.id) {
      return /*#__PURE__*/React__default["default"].createElement(adminjs.BasePropertyComponent.Password.Edit, props);
    }
    return /*#__PURE__*/React__default["default"].createElement(designSystem.Box, null, showPassword && /*#__PURE__*/React__default["default"].createElement(adminjs.BasePropertyComponent.Password.Edit, props), /*#__PURE__*/React__default["default"].createElement(designSystem.Box, {
      mb: "xl"
    }, /*#__PURE__*/React__default["default"].createElement(designSystem.Text, {
      textAlign: "center"
    }, /*#__PURE__*/React__default["default"].createElement(designSystem.Button, {
      onClick: function onClick() {
        return togglePassword(!showPassword);
      },
      type: "button"
    }, showPassword ? tb('cancel', resource.id) : tb('changePassword', resource.id)))));
  };

  AdminJS.UserComponents = {};
  AdminJS.UserComponents.Component0 = PasswordEdit;

})(AdminJSDesignSystem, AdminJS, React);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvcGFzc3dvcmRzL2NvbXBvbmVudHMvZWRpdC50c3giLCIuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIFRleHQgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJ1xuaW1wb3J0IHsgQmFzZVByb3BlcnR5Q29tcG9uZW50LCBFZGl0UHJvcGVydHlQcm9wcywgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdhZG1pbmpzJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgUGFzc3dvcmRFZGl0OiBSZWFjdC5GQzxFZGl0UHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBvbkNoYW5nZSwgcHJvcGVydHksIHJlY29yZCwgcmVzb3VyY2UgfSA9IHByb3BzXG4gIGNvbnN0IHsgdHJhbnNsYXRlQnV0dG9uOiB0YiB9ID0gdXNlVHJhbnNsYXRpb24oKVxuXG4gIGNvbnN0IFtzaG93UGFzc3dvcmQsIHRvZ2dsZVBhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzaG93UGFzc3dvcmQpIHtcbiAgICAgIG9uQ2hhbmdlKHByb3BlcnR5Lm5hbWUsICcnKVxuICAgIH1cbiAgfSwgW29uQ2hhbmdlLCBzaG93UGFzc3dvcmRdKVxuXG4gIC8vIEZvciBuZXcgcmVjb3JkcyBhbHdheXMgc2hvdyB0aGUgcHJvcGVydHlcbiAgaWYgKCFyZWNvcmQuaWQpIHtcbiAgICByZXR1cm4gPEJhc2VQcm9wZXJ0eUNvbXBvbmVudC5QYXNzd29yZC5FZGl0IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJveD5cbiAgICAgIHtzaG93UGFzc3dvcmQgJiYgPEJhc2VQcm9wZXJ0eUNvbXBvbmVudC5QYXNzd29yZC5FZGl0IHsuLi5wcm9wc30gLz59XG4gICAgICA8Qm94IG1iPVwieGxcIj5cbiAgICAgICAgPFRleHQgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0b2dnbGVQYXNzd29yZCghc2hvd1Bhc3N3b3JkKX0gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAge3Nob3dQYXNzd29yZCA/IHRiKCdjYW5jZWwnLCByZXNvdXJjZS5pZCkgOiB0YignY2hhbmdlUGFzc3dvcmQnLCByZXNvdXJjZS5pZCl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhc3N3b3JkRWRpdFxuIiwiQWRtaW5KUy5Vc2VyQ29tcG9uZW50cyA9IHt9XG5pbXBvcnQgQ29tcG9uZW50MCBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvcGFzc3dvcmRzL2NvbXBvbmVudHMvZWRpdCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuQ29tcG9uZW50MCA9IENvbXBvbmVudDAiXSwibmFtZXMiOlsiUGFzc3dvcmRFZGl0IiwicHJvcHMiLCJvbkNoYW5nZSIsInByb3BlcnR5IiwicmVjb3JkIiwicmVzb3VyY2UiLCJ1c2VUcmFuc2xhdGlvbiIsInRiIiwidHJhbnNsYXRlQnV0dG9uIiwidXNlU3RhdGUiLCJzaG93UGFzc3dvcmQiLCJ0b2dnbGVQYXNzd29yZCIsInVzZUVmZmVjdCIsIm5hbWUiLCJpZCIsIlJlYWN0IiwiQmFzZVByb3BlcnR5Q29tcG9uZW50IiwiQm94IiwiVGV4dCIsIkJ1dHRvbiIsIkFkbWluSlMiLCJVc2VyQ29tcG9uZW50cyIsIkNvbXBvbmVudDAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUlBLElBQU1BLFlBQXlDLEdBQUcsU0FBNUNBLFlBQXlDLENBQUlDLEtBQUssRUFBSztFQUMzRCxFQUFBLElBQVFDLFFBQVEsR0FBaUNELEtBQUssQ0FBOUNDLFFBQVE7TUFBRUMsUUFBUSxHQUF1QkYsS0FBSyxDQUFwQ0UsUUFBUTtNQUFFQyxNQUFNLEdBQWVILEtBQUssQ0FBMUJHLE1BQU07TUFBRUMsUUFBUSxHQUFLSixLQUFLLENBQWxCSSxRQUFRLENBQUE7RUFDNUMsRUFBQSxJQUFBLGVBQUEsR0FBZ0NDLHNCQUFjLEVBQUU7RUFBdkJDLElBQUFBLEVBQUUsbUJBQW5CQyxlQUFlLENBQUE7SUFFdkIsSUFBdUNDLFNBQUFBLEdBQUFBLGNBQVEsQ0FBQyxLQUFLLENBQUM7RUFBQSxJQUFBLFVBQUEsR0FBQSxjQUFBLENBQUEsU0FBQSxFQUFBLENBQUEsQ0FBQTtNQUEvQ0MsWUFBWSxHQUFBLFVBQUEsQ0FBQSxDQUFBLENBQUE7TUFBRUMsY0FBYyxHQUFBLFVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtFQUVuQ0MsRUFBQUEsZUFBUyxDQUFDLFlBQU07TUFDZCxJQUFJLENBQUNGLFlBQVksRUFBRTtFQUNqQlIsTUFBQUEsUUFBUSxDQUFDQyxRQUFRLENBQUNVLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQTtFQUM3QixLQUFBO0VBQ0YsR0FBQyxFQUFFLENBQUNYLFFBQVEsRUFBRVEsWUFBWSxDQUFDLENBQUMsQ0FBQTs7RUFFNUI7RUFDQSxFQUFBLElBQUksQ0FBQ04sTUFBTSxDQUFDVSxFQUFFLEVBQUU7TUFDZCxvQkFBT0MseUJBQUEsQ0FBQSxhQUFBLENBQUNDLDZCQUFxQixDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUtmLEtBQUssQ0FBSSxDQUFBO0VBQzNELEdBQUE7RUFFQSxFQUFBLG9CQUNFYyx3Q0FBQ0UsZ0JBQUcsRUFBQSxJQUFBLEVBQ0RQLFlBQVksaUJBQUlLLHdDQUFDQyw2QkFBcUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFLZixLQUFLLENBQUksZUFDbkVjLHdDQUFDRSxnQkFBRyxFQUFBO0VBQUMsSUFBQSxFQUFFLEVBQUMsSUFBQTtFQUFJLEdBQUEsZUFDVkYsd0NBQUNHLGlCQUFJLEVBQUE7RUFBQyxJQUFBLFNBQVMsRUFBQyxRQUFBO0VBQVEsR0FBQSxlQUN0Qkgsd0NBQUNJLG1CQUFNLEVBQUE7RUFBQyxJQUFBLE9BQU8sRUFBRSxTQUFBLE9BQUEsR0FBQTtFQUFBLE1BQUEsT0FBTVIsY0FBYyxDQUFDLENBQUNELFlBQVksQ0FBQyxDQUFBO09BQUM7RUFBQyxJQUFBLElBQUksRUFBQyxRQUFBO0tBQ3hEQSxFQUFBQSxZQUFZLEdBQUdILEVBQUUsQ0FBQyxRQUFRLEVBQUVGLFFBQVEsQ0FBQ1MsRUFBRSxDQUFDLEdBQUdQLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRUYsUUFBUSxDQUFDUyxFQUFFLENBQUMsQ0FDdEUsQ0FDSixDQUNILENBQ0YsQ0FBQTtFQUVWLENBQUM7O0VDakNETSxPQUFPLENBQUNDLGNBQWMsR0FBRyxFQUFFLENBQUE7RUFFM0JELE9BQU8sQ0FBQ0MsY0FBYyxDQUFDQyxVQUFVLEdBQUdBLFlBQVU7Ozs7OzsifQ==
