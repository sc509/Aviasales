import styles from '../ticket-list-item/ticket-list-item.module.scss';
import addDurationToDate from '../../Utilities/addDurationToDate';
import { formatTime } from '../../Utilities/formatTime';
import { transformStops } from '../../Utilities/transformStops';

function TicketSegment({ segment }) {
  const { ticketData, ticketDataRoute, ticketAllocated, ticketDataEnRoute, ticketDtaTransplants } = styles;
  const hours = Math.floor(segment.duration / 60);
  const minutes = segment.duration % 60;
  const stops = segment.stops.join(', ');
  const stopsCount = segment.stops.length;

  const arrivalTime = addDurationToDate(segment.date, segment.duration);
  return (
    <div className={ticketData}>
      <div className={ticketDataRoute}>
        <span className={ticketAllocated}>
          {segment.origin} - {segment.destination}
        </span>
        <span>
          {formatTime(segment.date)} - {arrivalTime}
        </span>
      </div>
      <div className={ticketDataEnRoute}>
        <span className={ticketAllocated}>В пути</span>
        <span>
          {hours} ч {minutes} м
        </span>
      </div>
      <div className={ticketDtaTransplants}>
        {stopsCount > 0 ? (
          <>
            <span className={ticketAllocated}>
              {stopsCount} {transformStops(stopsCount)}
            </span>
            <span>{stops}</span>
          </>
        ) : (
          <span className={ticketAllocated}>Без пересадок</span>
        )}
      </div>
    </div>
  );
}

export default TicketSegment;
