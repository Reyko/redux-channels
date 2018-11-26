import React from 'react';
import { PropTypes } from 'prop-types';
import { Provider } from 'react-redux';

const storeShape = PropTypes.shape({
  subscribe: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  getState: PropTypes.func.isRequired
});

export default class SocketProvider extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.store = props.store;
    this.socket = props.socket;
  }

  getChildContext() {
    return {
      store: this.store,
      socket: this.socket
    };
  }

  render() {
    const { children } = this.props;
    return (
      <Provider store={this.store}>
        {children}
      </Provider>
    );
  }
}

SocketProvider.propTypes = {
  store: storeShape,
  socket: PropTypes.object,
  children: PropTypes.element
};

SocketProvider.childContextTypes = {
  store: storeShape,
  socket: PropTypes.object
};
