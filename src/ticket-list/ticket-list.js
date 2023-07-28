import TicketListItem from "../ticket-list-item/ticket-list-item";

function TicketList(){
    return(
        <div className="aviasales__ticket-list">
            <TicketListItem/>
            <TicketListItem/>
            <TicketListItem/>
            <TicketListItem/>
        </div>
    )
}
export default TicketList;