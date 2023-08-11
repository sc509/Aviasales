import companyLogo from '../../assets/S7 Logo.png';
import styles from "./ticket-list-item.module.scss";
import TicketSegment from "../ticket-segment/ticket-segment";

function TicketListItem({ ticket }) {
    const { ticket__main, ticket__bookingInfo, ticket__price, ticket__companyName } = styles;
    return (
        <div className={ticket__main}>
            <div className={ticket__bookingInfo}>
                <div className={ticket__price}>
                    <span>{ticket.price} </span>
                </div>
                <div className={ticket__companyName}>
                    <img src={companyLogo} alt="Logo Company"/>
                </div>
            </div>
            {ticket.segments.map((segment, index) =>
                <TicketSegment segment={segment} key={index} />
            )}
        </div>
    )
}

export default TicketListItem;