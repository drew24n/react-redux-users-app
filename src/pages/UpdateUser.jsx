import {useHistory} from "react-router-dom";
import {getFormData} from "../utils/getFormData";
import {useDispatch, useSelector} from "react-redux";
import styles from '../styles/UpdateAddUser.module.scss';
import {requestUpdateUser} from "../redux/usersActions";
import {useMemo, useState} from "react";

export function UpdateUser() {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    const userId = +new URLSearchParams(history.location.search).get('id')
    const currentUser = useMemo(() => {
        return state.users.find(user => user.id === userId)
    }, [userId, state.users])

    const [userInfo, setUserInfo] = useState(currentUser ? currentUser : {})

    function changeUserInfo(event) {
        const {name, value} = event.target
        const obj = {}
        obj[name] = value
        setUserInfo(userInfo => ({
            ...userInfo, ...obj
        }))
    }

    function saveUserHandler(event) {
        const data = getFormData(event)
        dispatch(requestUpdateUser(userId, data))
    }

    return (
        <div className={styles.container}>
            <h2>Update User</h2>
            <form onSubmit={saveUserHandler}>
                <input value={userInfo.name} onChange={changeUserInfo} type="text"
                       name="name" placeholder="name" autoFocus required/>
                <input value={userInfo.surname} onChange={changeUserInfo} type="text"
                       name="surname" placeholder="surname" required/>
                <input value={userInfo.desc} onChange={changeUserInfo} type="text"
                       name="desc" placeholder="desc" required/>
                <button>Save</button>
            </form>
        </div>
    )
}