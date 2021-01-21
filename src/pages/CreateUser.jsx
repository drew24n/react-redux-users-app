import styles from "../styles/UpdateAddUser.module.scss";
import {getFormData} from "../utils/getFormData";
import {useDispatch} from "react-redux";
import {requestAddUser} from "../redux/usersActions";

export function CreateUser() {
    const dispatch = useDispatch()

    function createUserHandler(event) {
        const data = getFormData(event)
        dispatch(requestAddUser(data))
    }

    return (
        <div className={styles.container}>
            <h2>Create User</h2>
            <form onSubmit={createUserHandler}>
                <input type="text" name="name" placeholder="name" autoFocus required/>
                <input type="text" name="surname" placeholder="surname" required/>
                <input type="text" name="desc" placeholder="desc" required/>
                <button>Save</button>
            </form>
        </div>
    )
}