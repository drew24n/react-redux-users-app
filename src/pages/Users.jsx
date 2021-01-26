import {useDispatch, useSelector} from "react-redux";
import {requestDeleteUser, setPageNumber} from "../redux/usersActions";
import {useHistory} from "react-router-dom";
import styles from '../styles/Users.module.scss';
import {Pagination} from "../components/Pagination";
import {useEffect} from "react";

export function Users() {
    const dispatch = useDispatch()
    const history = useHistory()
    const state = useSelector(state => state)

    function deleteUserHandler(id) {
        dispatch(requestDeleteUser(id))
    }

    //paginate array
    const size = state.pageSize //subarray size
    const subarray = []
    for (let i = 0; i < Math.ceil(state.users.length / size); i++) {
        subarray[i] = state.users.slice((i * size), (i * size) + size)
    }

    useEffect(() => {
        if (!subarray[state.currentPage - 1]) {
            dispatch(setPageNumber(1))
        }
    }, [state.users.length])

    return (
        <>
            <div className={styles.container}>
                {subarray[state.currentPage - 1] && subarray[state.currentPage - 1].length
                    ? subarray[state.currentPage - 1].map(user => (
                        <div className={styles.userItem} key={user.id}>
                            <p>Name: {user.name}</p>
                            <p>Surname: {user.surname}</p>
                            <p>Desc: {user.desc}</p>
                            <nav>
                                <button onClick={() => deleteUserHandler(user.id)}>Delete</button>
                                <button onClick={() => history.push(`/update?id=${user.id}`)}>Update</button>
                            </nav>
                        </div>
                    ))
                    : null}
            </div>
            <Pagination/>
        </>
    )
}