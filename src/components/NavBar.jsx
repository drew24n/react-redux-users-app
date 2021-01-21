import {NavLink} from "react-router-dom";
import styles from '../styles/NavBar.module.scss';

export function NavBar() {
    return (
        <header className={styles.container}>
            <NavLink exact to={'/'}>Users</NavLink>
            <NavLink to={'/create'}>Create</NavLink>
            <NavLink to={'/update'}>Update</NavLink>
        </header>
    )
}