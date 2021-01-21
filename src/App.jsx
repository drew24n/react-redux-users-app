import styles from './styles/App.module.scss';
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {requestUsers} from "./redux/usersActions";
import {NavBar} from "./components/NavBar";
import {Route, Switch} from "react-router-dom";
import {Users} from "./pages/Users";
import {UpdateUser} from "./pages/UpdateUser";
import {CreateUser} from "./pages/CreateUser";

export function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestUsers())
    }, [dispatch])

    return (
        <main className={styles.container}>
            <NavBar/>
            <Switch>
                <Route exact path={'/'} component={Users}/>
                <Route path={'/update'} component={UpdateUser}/>
                <Route path={'/create'} component={CreateUser}/>
            </Switch>
        </main>
    )
}