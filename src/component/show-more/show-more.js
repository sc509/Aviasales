import styles from './show-more.module.scss'
import {useDispatch} from "react-redux";
import {showMoreTickets} from "../../redux/actions";

function ShowMore() {
    const showMore = "Показать ещё 5 билетов!"
    const dispatch = useDispatch();
    const handleShowMoreClick = () => {
        dispatch(showMoreTickets(5))
    }
    const {showMoreCont,showMore__button} = styles;
    return (
        <div className={showMoreCont}>
            <button className={showMore__button} onClick={handleShowMoreClick}>{showMore.toUpperCase()}</button>
        </div>
    )
}

export default ShowMore;