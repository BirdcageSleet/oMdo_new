// Note this is a fixed version of redux-mock-store. Please treat it as a dependency
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = configureStore;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _redux = require('redux');

var isFunction = function isFunction(arg) {
  return typeof arg === 'function';
};

function configureStore() {
  var middlewares = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  return function mockStore() {
    var _getState = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    function mockStoreWithoutMiddleware() {
      var actions = [];

      var self = {
        getState: function getState() {
          return isFunction(_getState) ? _getState() : _getState;
        },

        getActions: function getActions() {
          return actions;
        },

        dispatch: function dispatch(action) {
          actions.push(action);
          // Here is the fix. It used to only return action
          return Promise.resolve(action);
        },

        clearActions: function clearActions() {
          actions = [];
        },

        subscribe: function subscribe() {
          return null;
        }
      };

      return self;
    }

    var mockStoreWithMiddleware = _redux.applyMiddleware.apply(undefined, _toConsumableArray(middlewares))(mockStoreWithoutMiddleware);

    return mockStoreWithMiddleware();
  };
}

module.exports = exports['default'];
