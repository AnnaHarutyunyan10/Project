import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '.././redusers/rootReduser';

const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk, thunkMiddleware, loggerMiddleware))
);