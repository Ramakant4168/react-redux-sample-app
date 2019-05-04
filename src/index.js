import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

import store from './store/store'


serviceWorker.unregister();

ReactDOM.render( <Provider store={store}> < App /> </Provider> , document.getElementById('root'));