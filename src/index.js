import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {rootReducer} from './reducer/rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import {routerMiddleware,ConnectedRouter} from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import createSagaMiddleware from 'redux-saga'
import mySaga from './saga/saga'
const sagaMiddleware = createSagaMiddleware()
let history=createHistory();
let store=createStore(rootReducer,composeWithDevTools(),applyMiddleware(thunk,routerMiddleware(history),sagaMiddleware));
sagaMiddleware.run(mySaga);
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <MuiThemeProvider>
                <App />
            </MuiThemeProvider>
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));
