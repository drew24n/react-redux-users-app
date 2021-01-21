export const REQUEST_USERS = "REQUEST_USERS"
export const SET_USERS = "SET_USERS"
export const REQUEST_ADD_USER = "REQUEST_ADD_USER"
export const SET_NEW_USER = "SET_NEW_USER"
export const REQUEST_UPDATE_USER = "REQUEST_UPDATE_USER"
export const SET_UPDATE_USER_DATA = "SET_UPDATE_USER_DATA"
export const REQUEST_DELETE_USER = "REQUEST_DELETE_USER"
export const SET_DELETE_USER_RESPONSE = "SET_DELETE_USER_RESPONSE"
export const SET_IS_FETCHING = "SET_IS_FETCHING"

export const isFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching})

export const requestUsers = () => ({type: REQUEST_USERS})
export const setUsers = (usersData) => ({type: SET_USERS, usersData})

export const requestAddUser = (newUser) => ({type: REQUEST_ADD_USER, newUser})
export const setNewUser = (newUserRes) => ({type: SET_NEW_USER, newUserRes})

export const requestEditUser = (userId, updateUserData) => ({type: REQUEST_UPDATE_USER, userId, updateUserData})
export const setEditUserData = (updateUserDataRes) => ({type: SET_UPDATE_USER_DATA, updateUserDataRes})

export const requestDeleteUser = (userId) => ({type: REQUEST_DELETE_USER, userId})
export const setDeleteUserResponse = (delUsersRes) => ({type: SET_DELETE_USER_RESPONSE, delUsersRes})