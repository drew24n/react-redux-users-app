import {useDispatch, useSelector} from "react-redux";
import styles from '../styles/Pagination.module.scss';
import {setPageNumber} from "../redux/usersActions";

export function Pagination() {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const pagesTotal = Math.ceil((state.users.length + 1) / state.pageSize)
    const pagesArr = []
    for (let i = 1; i <= pagesTotal; i++) {
        pagesArr.push(i)
    }

    function changePageHandler(pageItem) {
        dispatch(setPageNumber(pageItem))
    }

    return (
        <div className={styles.container}>
            {pagesArr.map(pageItem => (
                <span onClick={() => changePageHandler(pageItem)} className={styles.pageItem} key={pageItem}
                      style={state.currentPage === pageItem ? {backgroundColor: '#7fff00'} : {}}>
                    {pageItem}
                </span>
            ))}
        </div>
    )
}