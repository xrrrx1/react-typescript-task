import * as React from 'react';
import { Provider } from 'react-redux';
import App from '../App/App';
import store from '../../store/Store';

function Root(props: any) {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Root;