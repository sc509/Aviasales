import styles from "../ticket-list-item/ticket-list-item.module.scss";
import {addDurationToDate} from "../../Utilities/addDurationToDate";
import {formatTime} from "../../Utilities/formatTime";
import {transformStops} from "../../Utilities/transformStops";

function TicketSegment({ segment }) {
    const { ticket__data, ticket__dataRoute, ticket__allocated, ticket__dataEnRoute, ticket__dataTransplants } = styles;
    const hours = Math.floor(segment.duration / 60);
    const minutes = segment.duration % 60;
    const stops = segment.stops.join(', ');
    const stopsCount = segment.stops.length;

    const arrivalTime = addDurationToDate(segment.date, segment.duration);
    return (
        <div className={ticket__data}>
            <div className={ticket__dataRoute}>
                <span className={ticket__allocated}>{segment.origin} - {segment.destination}</span>
                <span>{formatTime(segment.date)} - {arrivalTime} </span>
            </div>
            <div className={ticket__dataEnRoute}>
                <span className={ticket__allocated}>В пути</span>
                <span>{hours} ч {minutes} м</span>
            </div>
            <div className={ticket__dataTransplants}>
                {stopsCount > 0 ?
                    <span className={ticket__allocated}>{stopsCount} {transformStops(stopsCount)}</span> :
                    <span className={ticket__allocated}>Без пересадок</span>
                }
                {stopsCount > 0 && <span>{stops}</span>}
            </div>
        </div>
    );
}

export default TicketSegment;