import {takeEvery, put, call} from 'redux-saga/effects';
import {
    REQUEST_ADD_USER, REQUEST_DELETE_USER, REQUEST_UPDATE_USER, REQUEST_USERS,
    setDeleteUserResponse, setUpdateUserData, setNewUser, setUsers, isFetching
} from "../usersActions";
import {usersAPI} from "../../api/usersAPI";
import history from '../../utils/history';

export function* usersWatcher() {
    yield takeEvery(REQUEST_USERS, getUsersWorker)
    yield takeEvery(REQUEST_ADD_USER, addUserWorker)
    yield takeEvery(REQUEST_UPDATE_USER, updateUserWorker)
    yield takeEvery(REQUEST_DELETE_USER, deleteUserWorker)
}

function* getUsersWorker() {
    try {
        yield put(isFetching(true))
        const data = yield call(usersAPI.getUsers)
        if (data) {
            yield put(setUsers(data))

        }
    } catch (e) {
        alert(e)
    } finally {
        yield put(isFetching(false))
    }
}

function* addUserWorker(newUser) {
    try {
        yield put(isFetching(true))
        const data = yield call(usersAPI.addUser, newUser)
        if (data) {
            yield put(setNewUser(data))
            history.push('/')
        }
    } catch (e) {
        alert(e)
    } finally {
        yield put(isFetching(false))
    }
}

function* updateUserWorker(userId, updateUserData) {
    try {
        yield put(isFetching(true))
        const data = yield call(usersAPI.updateUser, userId, updateUserData)
        if (data) {
            yield put(setUpdateUserData(data))
            history.push('/')
        }
    } catch (e) {
        alert(e)
    } finally {
        yield put(isFetching(false))
    }
}

function* deleteUserWorker(action) {
    try {
        yield put(isFetching(true))
        const data = yield call(usersAPI.deleteUser, action.userId)
        if (data) {
            yield put(setDeleteUserResponse(data))
        }
    } catch (e) {
        alert(e)
    } finally {
        yield put(isFetching(false))
    }
}