import {NavLink} from "react-router-dom";
import styles from '../styles/NavBar.module.scss';

export function NavBar() {
    return (
        <header className={styles.container}>
            <NavLink activeClassName={styles.active} exact to={'/'}>Users</NavLink>
            <NavLink activeClassName={styles.active} to={'/create'}>Create</NavLink>
        </header>
    )
}