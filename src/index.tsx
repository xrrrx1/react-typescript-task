import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import Root from './components/Root';

ReactDOM.render(
  <Root />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
