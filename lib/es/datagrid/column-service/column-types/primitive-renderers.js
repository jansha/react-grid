var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import { FormControl } from 'react-bootstrap';
import { FormattedNumber as N } from 'react-intl';

export var primitiveRender = function primitiveRender(primitiveProps) {
  return React.createElement(FormControl, primitiveProps);
};

export default {
  // primitiveNumberValueRender
  numberValRender: function numberValRender(col, rowIndex, valueRender) {
    return valueRender(rowIndex, function (v) {
      return React.createElement(N, _extends({ value: v }, col.renderComponentProps));
    });
  },

  // primitiveCellEdit
  cellEdit: function cellEdit(col, column, rowIndex, tabIndex, gridId, editValueParser, formControlType, functions, getComponentDisabledState) {
    var cellName = 'edit';
    var primitiveProps = _extends({
      id: 'ocDatagridEditInput-' + gridId + '-' + column.columnKey + '-' + rowIndex,
      style: column.style,
      tabIndex: tabIndex,
      type: formControlType,
      value: functions.getItemValue(rowIndex, col),
      onBlur: functions.onCellBlur(rowIndex, col),
      onKeyDown: functions.onCellKeyDown(rowIndex, col),
      inputRef: functions.handleCellRef(rowIndex, col),
      disabled: getComponentDisabledState(rowIndex, col, cellName),
      onChange: functions.onCellValueChange(rowIndex, col, editValueParser),
      onFocus: functions.onCellFocus(cellName, col.componentType, rowIndex, column.columnKey)
    }, col.editComponentProps);
    return primitiveRender(_extends({}, primitiveProps));
  },

  // primitiveCellCreate
  cellCreate: function cellCreate(col, column, rowIndex, tabIndex, gridId, createValueParser, formControlType, functions, getComponentDisabledState) {
    var cellName = 'create';
    var primitiveProps = _extends({
      id: 'ocDatagridCreateInput-' + gridId + '-' + column.columnKey + '-' + rowIndex,
      style: column.style,
      tabIndex: tabIndex,
      type: formControlType || col.componentType,
      value: functions.getItemValue(rowIndex, col),
      onBlur: functions.onCellBlur(rowIndex, col),
      onKeyDown: functions.onCellKeyDown(rowIndex, col, false),
      inputRef: functions.handleCellRef(rowIndex, col),
      disabled: getComponentDisabledState(rowIndex, col, cellName),
      onChange: functions.onCellValueChange(rowIndex, col, createValueParser),
      onFocus: functions.onCellFocus(cellName, col.componentType, rowIndex, column.columnKey)
    }, col.createComponentProps);
    return primitiveRender(_extends({}, primitiveProps));
  },

  // primitiveCellFilter
  cellFilter: function cellFilter(col, column, tabIndex, gridId, filterValueParser, formControlType, functions) {
    var primitiveProps = _extends({
      id: 'ocDatagridFilterInput-' + gridId + '-' + column.columnKey,
      style: column.style,
      tabIndex: tabIndex,
      type: formControlType,
      value: functions.getItemValue(col),
      onChange: functions.onCellValueChange(col, filterValueParser)
    }, col.filterComponentProps);
    return primitiveRender(_extends({}, primitiveProps));
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9kYXRhZ3JpZC9jb2x1bW4tc2VydmljZS9jb2x1bW4tdHlwZXMvcHJpbWl0aXZlLXJlbmRlcmVycy5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtQ29udHJvbCIsIkZvcm1hdHRlZE51bWJlciIsIk4iLCJwcmltaXRpdmVSZW5kZXIiLCJwcmltaXRpdmVQcm9wcyIsIm51bWJlclZhbFJlbmRlciIsImNvbCIsInJvd0luZGV4IiwidmFsdWVSZW5kZXIiLCJ2IiwicmVuZGVyQ29tcG9uZW50UHJvcHMiLCJjZWxsRWRpdCIsImNvbHVtbiIsInRhYkluZGV4IiwiZ3JpZElkIiwiZWRpdFZhbHVlUGFyc2VyIiwiZm9ybUNvbnRyb2xUeXBlIiwiZnVuY3Rpb25zIiwiZ2V0Q29tcG9uZW50RGlzYWJsZWRTdGF0ZSIsImNlbGxOYW1lIiwiaWQiLCJjb2x1bW5LZXkiLCJzdHlsZSIsInR5cGUiLCJ2YWx1ZSIsImdldEl0ZW1WYWx1ZSIsIm9uQmx1ciIsIm9uQ2VsbEJsdXIiLCJvbktleURvd24iLCJvbkNlbGxLZXlEb3duIiwiaW5wdXRSZWYiLCJoYW5kbGVDZWxsUmVmIiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsIm9uQ2VsbFZhbHVlQ2hhbmdlIiwib25Gb2N1cyIsIm9uQ2VsbEZvY3VzIiwiY29tcG9uZW50VHlwZSIsImVkaXRDb21wb25lbnRQcm9wcyIsImNlbGxDcmVhdGUiLCJjcmVhdGVWYWx1ZVBhcnNlciIsImNyZWF0ZUNvbXBvbmVudFByb3BzIiwiY2VsbEZpbHRlciIsImZpbHRlclZhbHVlUGFyc2VyIiwiZmlsdGVyQ29tcG9uZW50UHJvcHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLFdBQVQsUUFBNEIsaUJBQTVCO0FBQ0EsU0FBU0MsbUJBQW1CQyxDQUE1QixRQUFxQyxZQUFyQzs7QUFFQSxPQUFPLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0I7QUFBQSxTQUFt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QkFaSCxDQUFOO0FBY0EsV0FBT3RDLDZCQUFxQkMsY0FBckIsRUFBUDtBQUNELEdBakVZOztBQWtFYjtBQUNBc0MsWUFuRWEsc0JBb0VYcEMsR0FwRVcsRUFxRVhNLE1BckVXLEVBc0VYQyxRQXRFVyxFQXVFWEMsTUF2RVcsRUF3RVg2QixpQkF4RVcsRUF5RVgzQixlQXpFVyxFQTBFWEMsU0ExRVcsRUEyRVg7QUFDQSxRQUFNYjtBQUNKZ0IscUNBQTZCTixNQUE3QixTQUF1Q0YsT0FBT1MsU0FEMUM7QUFFSkMsYUFBT1YsT0FBT1UsS0FGVjtBQUdKVCx3QkFISTtBQUlKVSxZQUFNUCxlQUpGO0FBS0pRLGFBQU9QLFVBQVVRLFlBQVYsQ0FBdUJuQixHQUF2QixDQUxIO0FBTUoyQixnQkFBVWhCLFVBQVVpQixpQkFBVixDQUE0QjVCLEdBQTVCLEVBQWlDcUMsaUJBQWpDO0FBTk4sT0FPRHJDLElBQUlzQyxvQkFQSCxDQUFOO0FBU0EsV0FBT3pDLDZCQUFxQkMsY0FBckIsRUFBUDtBQUNEO0FBdEZZLENBQWYiLCJmaWxlIjoicHJpbWl0aXZlLXJlbmRlcmVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBGb3JtYXR0ZWROdW1iZXIgYXMgTiB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5leHBvcnQgY29uc3QgcHJpbWl0aXZlUmVuZGVyID0gcHJpbWl0aXZlUHJvcHMgPT4gKDxGb3JtQ29udHJvbCB7Li4ucHJpbWl0aXZlUHJvcHN9IC8+KTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBwcmltaXRpdmVOdW1iZXJWYWx1ZVJlbmRlclxuICBudW1iZXJWYWxSZW5kZXIoY29sLCByb3dJbmRleCwgdmFsdWVSZW5kZXIpIHtcbiAgICByZXR1cm4gdmFsdWVSZW5kZXIoXG4gICAgICByb3dJbmRleCxcbiAgICAgIHYgPT4gPE4gdmFsdWU9e3Z9IHsuLi5jb2wucmVuZGVyQ29tcG9uZW50UHJvcHN9IC8+LFxuICAgICk7XG4gIH0sXG4gIC8vIHByaW1pdGl2ZUNlbGxFZGl0XG4gIGNlbGxFZGl0KFxuICAgIGNvbCxcbiAgICBjb2x1bW4sXG4gICAgcm93SW5kZXgsXG4gICAgdGFiSW5kZXgsXG4gICAgZ3JpZElkLFxuICAgIGVkaXRWYWx1ZVBhcnNlcixcbiAgICBmb3JtQ29udHJvbFR5cGUsXG4gICAgZnVuY3Rpb25zLFxuICAgIGdldENvbXBvbmVudERpc2FibGVkU3RhdGUsXG4gICkge1xuICAgIGNvbnN0IGNlbGxOYW1lID0gJ2VkaXQnO1xuICAgIGNvbnN0IHByaW1pdGl2ZVByb3BzID0ge1xuICAgICAgaWQ6IGBvY0RhdGFncmlkRWRpdElucHV0LSR7Z3JpZElkfS0ke2NvbHVtbi5jb2x1bW5LZXl9LSR7cm93SW5kZXh9YCxcbiAgICAgIHN0eWxlOiBjb2x1bW4uc3R5bGUsXG4gICAgICB0YWJJbmRleCxcbiAgICAgIHR5cGU6IGZvcm1Db250cm9sVHlwZSxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbnMuZ2V0SXRlbVZhbHVlKHJvd0luZGV4LCBjb2wpLFxuICAgICAgb25CbHVyOiBmdW5jdGlvbnMub25DZWxsQmx1cihyb3dJbmRleCwgY29sKSxcbiAgICAgIG9uS2V5RG93bjogZnVuY3Rpb25zLm9uQ2VsbEtleURvd24ocm93SW5kZXgsIGNvbCksXG4gICAgICBpbnB1dFJlZjogZnVuY3Rpb25zLmhhbmRsZUNlbGxSZWYocm93SW5kZXgsIGNvbCksXG4gICAgICBkaXNhYmxlZDogZ2V0Q29tcG9uZW50RGlzYWJsZWRTdGF0ZShyb3dJbmRleCwgY29sLCBjZWxsTmFtZSksXG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb25zLm9uQ2VsbFZhbHVlQ2hhbmdlKHJvd0luZGV4LCBjb2wsIGVkaXRWYWx1ZVBhcnNlciksXG4gICAgICBvbkZvY3VzOiBmdW5jdGlvbnMub25DZWxsRm9jdXMoY2VsbE5hbWUsIGNvbC5jb21wb25lbnRUeXBlLCByb3dJbmRleCwgY29sdW1uLmNvbHVtbktleSksXG4gICAgICAuLi5jb2wuZWRpdENvbXBvbmVudFByb3BzLFxuICAgIH07XG4gICAgcmV0dXJuIHByaW1pdGl2ZVJlbmRlcih7IC4uLnByaW1pdGl2ZVByb3BzIH0pO1xuICB9LFxuICAvLyBwcmltaXRpdmVDZWxsQ3JlYXRlXG4gIGNlbGxDcmVhdGUoXG4gICAgY29sLFxuICAgIGNvbHVtbixcbiAgICByb3dJbmRleCxcbiAgICB0YWJJbmRleCxcbiAgICBncmlkSWQsXG4gICAgY3JlYXRlVmFsdWVQYXJzZXIsXG4gICAgZm9ybUNvbnRyb2xUeXBlLFxuICAgIGZ1bmN0aW9ucyxcbiAgICBnZXRDb21wb25lbnREaXNhYmxlZFN0YXRlLFxuICApIHtcbiAgICBjb25zdCBjZWxsTmFtZSA9ICdjcmVhdGUnO1xuICAgIGNvbnN0IHByaW1pdGl2ZVByb3BzID0ge1xuICAgICAgaWQ6IGBvY0RhdGFncmlkQ3JlYXRlSW5wdXQtJHtncmlkSWR9LSR7Y29sdW1uLmNvbHVtbktleX0tJHtyb3dJbmRleH1gLFxuICAgICAgc3R5bGU6IGNvbHVtbi5zdHlsZSxcbiAgICAgIHRhYkluZGV4LFxuICAgICAgdHlwZTogZm9ybUNvbnRyb2xUeXBlIHx8IGNvbC5jb21wb25lbnRUeXBlLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9ucy5nZXRJdGVtVmFsdWUocm93SW5kZXgsIGNvbCksXG4gICAgICBvbkJsdXI6IGZ1bmN0aW9ucy5vbkNlbGxCbHVyKHJvd0luZGV4LCBjb2wpLFxuICAgICAgb25LZXlEb3duOiBmdW5jdGlvbnMub25DZWxsS2V5RG93bihyb3dJbmRleCwgY29sLCBmYWxzZSksXG4gICAgICBpbnB1dFJlZjogZnVuY3Rpb25zLmhhbmRsZUNlbGxSZWYocm93SW5kZXgsIGNvbCksXG4gICAgICBkaXNhYmxlZDogZ2V0Q29tcG9uZW50RGlzYWJsZWRTdGF0ZShyb3dJbmRleCwgY29sLCBjZWxsTmFtZSksXG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb25zLm9uQ2VsbFZhbHVlQ2hhbmdlKHJvd0luZGV4LCBjb2wsIGNyZWF0ZVZhbHVlUGFyc2VyKSxcbiAgICAgIG9uRm9jdXM6IGZ1bmN0aW9ucy5vbkNlbGxGb2N1cyhjZWxsTmFtZSwgY29sLmNvbXBvbmVudFR5cGUsIHJvd0luZGV4LCBjb2x1bW4uY29sdW1uS2V5KSxcbiAgICAgIC4uLmNvbC5jcmVhdGVDb21wb25lbnRQcm9wcyxcbiAgICB9O1xuICAgIHJldHVybiBwcmltaXRpdmVSZW5kZXIoeyAuLi5wcmltaXRpdmVQcm9wcyB9KTtcbiAgfSxcbiAgLy8gcHJpbWl0aXZlQ2VsbEZpbHRlclxuICBjZWxsRmlsdGVyKFxuICAgIGNvbCxcbiAgICBjb2x1bW4sXG4gICAgdGFiSW5kZXgsXG4gICAgZ3JpZElkLFxuICAgIGZpbHRlclZhbHVlUGFyc2VyLFxuICAgIGZvcm1Db250cm9sVHlwZSxcbiAgICBmdW5jdGlvbnMsXG4gICkge1xuICAgIGNvbnN0IHByaW1pdGl2ZVByb3BzID0ge1xuICAgICAgaWQ6IGBvY0RhdGFncmlkRmlsdGVySW5wdXQtJHtncmlkSWR9LSR7Y29sdW1uLmNvbHVtbktleX1gLFxuICAgICAgc3R5bGU6IGNvbHVtbi5zdHlsZSxcbiAgICAgIHRhYkluZGV4LFxuICAgICAgdHlwZTogZm9ybUNvbnRyb2xUeXBlLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9ucy5nZXRJdGVtVmFsdWUoY29sKSxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbnMub25DZWxsVmFsdWVDaGFuZ2UoY29sLCBmaWx0ZXJWYWx1ZVBhcnNlciksXG4gICAgICAuLi5jb2wuZmlsdGVyQ29tcG9uZW50UHJvcHMsXG4gICAgfTtcbiAgICByZXR1cm4gcHJpbWl0aXZlUmVuZGVyKHsgLi4ucHJpbWl0aXZlUHJvcHMgfSk7XG4gIH0sXG59O1xuIl19