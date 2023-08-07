import companyLogo from '../../assets/S7 Logo.png';
import styles from "./ticket-list-item.module.scss";
import {transformStops} from "../../Utilities/transformStops";
import {addDurationToDate} from "../../Utilities/addDurationToDate";
import {formatTime} from "../../Utilities/formatTime";

function TicketSegment({ segment }) {
    const hours = Math.floor(segment.duration / 60);
    const minutes = segment.duration % 60;
    const stops = segment.stops.join(', ');
    const stopsCount = segment.stops.length;

    const arrivalTime = addDurationToDate(segment.date, segment.duration);

    return (
        <div className={styles.ticket__data}>
            <div className={styles.ticket__dataRoute}>
                <span className={styles.ticket__allocated}>{segment.origin} - {segment.destination}</span>
                <span>{formatTime(segment.date)} - {arrivalTime} </span>
            </div>
            <div className={styles.ticket__dataEnRoute}>
                <span className={styles.ticket__allocated}>В пути</span>
                <span>{hours} ч {minutes} м</span>
            </div>
            <div className={styles.ticket__dataTransplants}>
                {stopsCount > 0 ?
                    <span className={styles.ticket__allocated}>{stopsCount} {transformStops(stopsCount)}</span> :
                    <span className={styles.ticket__allocated}>Без пересадок</span>
                }
                {stopsCount > 0 && <span>{stops}</span>}
            </div>
        </div>
    );
}

function TicketListItem({ ticket }) {
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
            {ticket.segments.map((segment, index) =>
                <TicketSegment segment={segment} key={index} />
            )}
        </div>
    )
}

export default TicketListItem;