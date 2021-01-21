import {useDispatch, useSelector} from "react-redux";
import {requestDeleteUser} from "../redux/usersActions";
import {useHistory} from "react-router-dom";
import styles from '../styles/Users.module.scss';
import Preloader from "../components/Preloader";


export function Users() {
    const dispatch = useDispatch()
    const history = useHistory()
    const state = useSelector(state => state)

    function deleteUserHandler(id) {
        dispatch(requestDeleteUser(id))
    }

    if (state.isFetching) return <Preloader/>

    return (
        <div className={styles.container}>
            {state.users.map(user => (
                <div className={styles.userItem} key={user.id}>
                    <p>Name: {user.name}</p>
                    <p>Surname: {user.surname}</p>
                    <p>Desc: {user.desc}</p>
                    <nav>
                        <button onClick={() => deleteUserHandler(user.id)}>Delete</button>
                        <button onClick={() => history.push(`/update?id=${user.id}`)}>Update</button>
                    </nav>
                </div>
            ))}
        </div>
    )
}