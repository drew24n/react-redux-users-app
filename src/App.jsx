import styles from './styles/App.module.scss';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {requestUsers} from "./redux/usersActions";
import {NavBar} from "./components/NavBar";
import {Router, Route, Switch} from "react-router-dom";
import {Users} from "./pages/Users";
import {UpdateUser} from "./pages/UpdateUser";
import {CreateUser} from "./pages/CreateUser";
import Preloader from "./components/Preloader";
import {ErrorsHandler} from "./utils/ErrorsHandler";
import history from './utils/history';

export function App() {
    ErrorsHandler()

    const state = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestUsers())
    }, [dispatch])

    return (
        <main className={styles.container}>
            <NavBar/>
            <Router history={history}>
                <Switch>
                    <Route exact path={'/'} component={Users}/>
                    <Route exact path={'/update'} component={UpdateUser}/>
                    <Route path={'/create'} component={CreateUser}/>
                </Switch>
            </Router>
            {state.isFetching ? <Preloader/> : null}
        </main>
    )
}