import companyLogo from '../assets/S7 Logo.png'
import styles from "./ticket-list-item.module.scss";
import TicketData from "../ticket-data/ticket-data";

function TicketListItem({ticket}) {
    return (
        <div className={styles.ticket}>
            <div className={styles.ticket__bookingInfo}>
                <div className={styles.ticket__price}>
                    <span>{ticket.price} </span>
                </div>
                <div className={styles.ticket__companyName}>
                    <img src={companyLogo} alt="Logo Company"/>
                </div>
            </div>
            {ticket.segments.map((segments, index) => (
                <TicketData key={index} segment={ticket.segments[0]}
                            nextSegment={ticket.segments[1]}/>
            ))}
        </div>
    )
}

export default TicketListItem;