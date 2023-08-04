import TicketListItem from "../ticket-list-item/ticket-list-item";
import {useEffect} from "react";
import {getSearchId, getStackTickets} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";

function TicketList(){
    const dispatch = useDispatch();
    const searchId = useSelector(state => state.ticket.searchId);
    const tickets = useSelector(state => state.ticket.tickets);

    useEffect(() => {
        if (!searchId) {
            dispatch(getSearchId()).then(newSearchId => {
                dispatch(getStackTickets(newSearchId));
            });
        } else {
            dispatch(getStackTickets(searchId));
        }
    }, [dispatch, searchId]);

    return(
        <div className="aviasales__ticket-list">
            {
                tickets.slice(0, 5).map((ticket, index) => <TicketListItem key={index} ticket={ticket} />)
            }
        </div>
    )
}
export default TicketList;