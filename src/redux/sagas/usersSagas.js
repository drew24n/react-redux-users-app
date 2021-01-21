import {takeEvery, put, call} from 'redux-saga/effects';
import {
    REQUEST_ADD_USER,
    REQUEST_DELETE_USER,
    REQUEST_UPDATE_USER,
    REQUEST_USERS, setDeleteUserResponse, setEditUserData,
    setNewUser,
    setUsers
} from "../usersActions";
import {usersAPI} from "../../api/usersAPI";

export function* userWatcher() {
    yield takeEvery(REQUEST_USERS, getUsersWorker)
    yield takeEvery(REQUEST_ADD_USER, addUserWorker)
    yield takeEvery(REQUEST_UPDATE_USER, updateUserWorker)
    yield takeEvery(REQUEST_DELETE_USER, deleteUserWorker)
}

function* getUsersWorker() {
    try {
        const data = yield call(usersAPI.getUsers)
        yield put(setUsers(data))
    } catch (e) {
        alert(e)
    }
}

function* addUserWorker({newUser}) {
    try {
        const data = yield call(usersAPI.addUser, newUser)
        yield put(setNewUser(data))
    } catch (e) {
        alert(e)
    }
}

function* updateUserWorker({userId, updateUserData}) {
    try {
        const data = yield call(usersAPI.editUser, {userId, updateUserData})
        yield put(setEditUserData(data))
    } catch (e) {
        alert(e)
    }
}

function* deleteUserWorker(action) {
    try {
        const data = yield call(usersAPI.deleteUser, action.userId)
        yield put(setDeleteUserResponse(data))
    } catch (e) {
        alert(e)
    }
}