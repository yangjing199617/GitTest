import React from 'react';
import ReactDOM from 'react-dom';
import './assets/js/jquery';
import './assets/js/js';
import './assets/css/css.css'

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import defaultState from './store/state';
import reducer from './store/reducer';
let stroe=createStore(reducer,defaultState);


import {BrowserRouter,Route} from 'react-router-dom'
import App from './components/App';




ReactDOM.render(
    <Provider store={stroe}>
        <BrowserRouter>
            <Route component={App} />
        </BrowserRouter>
    </Provider>
   ,
    document.getElementById('root'));
registerServiceWorker();
import registerServiceWorker from './registerServiceWorker';