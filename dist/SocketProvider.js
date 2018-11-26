'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var storeShape = _propTypes.PropTypes.shape({
  subscribe: _propTypes.PropTypes.func.isRequired,
  dispatch: _propTypes.PropTypes.func.isRequired,
  getState: _propTypes.PropTypes.func.isRequired
});

var SocketProvider = function (_React$Component) {
  _inherits(SocketProvider, _React$Component);

  function SocketProvider(props, context) {
    _classCallCheck(this, SocketProvider);

    var _this = _possibleConstructorReturn(this, (SocketProvider.__proto__ || Object.getPrototypeOf(SocketProvider)).call(this, props, context));

    _this.store = props.store;
    _this.socket = props.socket;
    return _this;
  }

  _createClass(SocketProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        store: this.store,
        socket: this.socket
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: this.store },
        children
      );
    }
  }]);

  return SocketProvider;
}(_react2.default.Component);

exports.default = SocketProvider;


SocketProvider.propTypes = {
  store: storeShape,
  socket: _propTypes.PropTypes.object,
  children: _propTypes.PropTypes.element
};

SocketProvider.childContextTypes = {
  store: storeShape,
  socket: _propTypes.PropTypes.object
};