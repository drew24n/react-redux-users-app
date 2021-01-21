import {useHistory} from "react-router-dom";
import {getFormData} from "../utils/getFormData";
import {useDispatch} from "react-redux";
import {requestUpdateUser} from "../redux/usersActions";
import styles from '../styles/UpdateUser.module.scss';

export function UpdateUser() {
    const dispatch = useDispatch()
    const history = useHistory()

    const userId = +new URLSearchParams(history.location.search).get('id')

    function updateFormHandler(event) {
        const data = getFormData(event)
        dispatch(requestUpdateUser(userId, data))
    }

    return (
        <div className={styles.container}>
            <h2>Update User</h2>
            <form onSubmit={updateFormHandler}>
                <input type="text" name="name" placeholder="name" autoFocus required/>
                <input type="text" name="surname" placeholder="surname" required/>
                <input type="text" name="desc" placeholder="desc" required/>
                <button>Save</button>
            </form>
        </div>
    )
}