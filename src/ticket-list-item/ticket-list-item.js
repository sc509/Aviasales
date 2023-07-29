import companyLogo from '../assets/S7 Logo.png'
import styles from "./ticket-list-item.module.scss";
import TicketData from "../ticket-data/ticket-data";

function TicketListItem() {
    return (
        <div className={styles.ticket}>
            <div className={styles.ticket__bookingInfo}>
                <div className={styles.ticket__price}>
                    <span>13400 Р</span>
                </div>
                <div className={styles.ticket__companyName}>
                    <img src={companyLogo} alt="Logo Company"/>
                </div>
            </div>
            <TicketData/>
            <TicketData/>
        </div>
    )
}

export default TicketListItem;