import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import 'bulma/css/bulma.css';
import 'antd/dist/antd.css';
// import './css/style.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
