import styles from './show-more.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {showMoreTickets} from "../../redux/actions";

function ShowMore() {
    const showMore = "Показать ещё 5 билетов!"
    const dispatch = useDispatch();
    let fiveTickets = useSelector(state => state.ticket.fiveTickets)
    const handleShowMoreClick = () => {
        dispatch(showMoreTickets(5))
    }
    return (
        <div className={styles.showMore}>
            <button className={styles.showMore__button} onClick={handleShowMoreClick}>{showMore.toUpperCase()}</button>
        </div>
    )
}

export default ShowMore;