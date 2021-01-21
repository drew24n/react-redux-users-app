import {applyMiddleware, compose, createStore} from "redux";
import {usersReducer} from "./usersReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootSaga} from "./sagas/rootSaga";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(usersReducer, compose(
    applyMiddleware(sagaMiddleware),
    composeWithDevTools() && process.env.NODE_ENV === 'development' ? composeWithDevTools() : f => f
))

sagaMiddleware.run(rootSaga)