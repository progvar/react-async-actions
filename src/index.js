import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import LoginPage from './components/loginPage';
import rootReducer from './reducers';


const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger));


render(
    <Provider store={store}>
        <LoginPage />
    </Provider>,
    document.getElementById('app')
);