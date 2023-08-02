import styles from "../ticket-list-item/ticket-list-item.module.scss";

function transformHours(hours) {
    const lastDigit = hours % 10;
    if ((hours >= 10 && hours <= 20) || lastDigit >= 5 || lastDigit === 0) {
        return 'часов';
    } else if (lastDigit === 1) {
        return 'час';
    } else {
        return 'часа';
    }
}

function transformMinutes(minutes) {
    const lastDigit = minutes % 10;
    if ((minutes >= 10 && minutes <= 20) || lastDigit >= 5 || lastDigit === 0) {
        return 'минут';
    } else if (lastDigit === 1) {
        return 'минута';
    } else {
        return 'минуты';
    }
}

function transformStops(stops) {
    const lastDigit = stops % 10;
    if (stops === 0) {
        return 'Без пересадок';
    } else if ((stops >= 10 && stops <= 20) || lastDigit >= 5 || lastDigit === 0) {
        return 'пересадок';
    } else if (lastDigit === 1) {
        return 'пересадка';
    } else {
        return 'пересадки';
    }
}

function TicketData({segment, nextSegment}) {
    const hours = Math.floor(segment.duration / 60);
    const minutes = segment.duration % 60;
    const hoursWord = transformHours(hours);
    const minutesWord = transformMinutes(minutes);
    const stops = segment.stops.join(', ');
    const stopsWord = transformStops(segment.stops.length);
    const startDate = new Date(segment.date);
    const endData = new Date(nextSegment.date)
    const formattedStartTime = `${startDate.getHours().toString().padStart(2, '0')}:${startDate.getMinutes().toString().padStart(2, '0')}`;
    const formattedEndTime = `${endData.getHours().toString().padStart(2, '0')}:${endData.getMinutes().toString().padStart(2, '0')}`;
    return (
        <div className={styles.ticket__data}>
            <div className={styles.ticket__dataRoute}>
                <span className={styles.ticket__allocated}>{segment.origin} - {segment.destination}</span>
                <span>{formattedStartTime} - {formattedEndTime}</span>
            </div>
            <div className={styles.ticket__dataEnRoute}>
                <span className={styles.ticket__allocated}>В пути</span>
                <span>{hours} {hoursWord} {minutes} {minutesWord}</span>
            </div>
            <div className={styles.ticket__dataTransplants}>
                {segment.stops.length > 0 ?
                    <span className={styles.ticket__allocated}>{segment.stops.length} {stopsWord}</span> :
                    <span className={styles.ticket__allocated}>{stopsWord}</span>
                }
                <span>{stops}</span>
            </div>
        </div>
    );
}

export default TicketData;