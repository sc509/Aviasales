import TicketListItem from "../ticket-list-item/ticket-list-item";
import {useEffect} from "react";
import {getSearchId, getStackTickets} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import styles from "./ticket-list.module.scss"

function TicketList(){
    const dispatch = useDispatch();
    const searchId = useSelector(state => state.ticket.searchId);
    const tickets = useSelector(state => state.ticket.tickets);
    const fiveTickets = useSelector(state => state.ticket.fiveTickets)
    const noTicketsFounds = useSelector(state => state.ticket.noTicketsFounds)
    useEffect(() => {
        if (!searchId) {
            dispatch(getSearchId()).then(newSearchId => {
                dispatch(getStackTickets(newSearchId));
            });
        } else {
            dispatch(getStackTickets(searchId));
        }
    }, [dispatch, searchId]);

    if(noTicketsFounds){
        return <div className={styles.error}>Рейсов, подходящих под заданные фильтры, не найдено</div>
    }

    return(
        <div className="aviasales__ticket-list">
            {
                tickets.slice(0, fiveTickets).map((ticket, index) => <TicketListItem key={index} ticket={ticket} />)
            }
        </div>
    )
}
export default TicketList;