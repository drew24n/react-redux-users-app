import {fork} from 'redux-saga/effects'
import {usersWatcher} from './usersSagas'

export function* rootSaga() {
    yield fork(usersWatcher)
}