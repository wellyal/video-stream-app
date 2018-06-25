import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Routes from 'configs/routes'

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
