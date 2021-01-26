import {
    SET_DELETE_USER_RESPONSE, SET_IS_FETCHING, SET_NEW_USER,
    SET_PAGE_NUMBER, SET_UPDATE_USER_DATA, SET_USERS
} from "./usersActions";

const initialState = {
    users: [],
    isFetching: false,
    pageSize: 5,
    currentPage: 1
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGE_NUMBER: {
            return {
                ...state, currentPage: action.pageNumber
            }
        }
        case SET_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case SET_USERS:
            return {
                ...state, users: action.usersData
            }
        case SET_NEW_USER:
            return {
                ...state, users: [...state.users, {
                    id: action.newUserRes.id,
                    name: action.newUserRes.name,
                    surname: action.newUserRes.surname,
                    desc: action.newUserRes.desc
                }]
            }
        case SET_UPDATE_USER_DATA:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.updateUserDataRes.id) {
                        user.name = action.updateUserDataRes.name
                        user.surname = action.updateUserDataRes.surname
                        user.desc = action.updateUserDataRes.desc
                        return user
                    }
                    return user
                })
            }
        case SET_DELETE_USER_RESPONSE:
            return {
                ...state, users: action.delUsersRes
            }
        default:
            return state
    }
}