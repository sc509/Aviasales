import TicketSegment from '../ticket-segment/ticket-segment';

import styles from './ticket-list-item.module.scss';

function TicketListItem({ ticket }) {
  const { ticketMain, ticketBookingInfo, ticketPrice, ticketCompanyName } = styles;

  return (
    <div className={ticketMain}>
      <div className={ticketBookingInfo}>
        <div className={ticketPrice}>
          <span>{ticket.price} </span>
        </div>
        <div className={ticketCompanyName}>
          <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt="Logo Company" />
        </div>
      </div>
      {ticket.segments.map((segment) => {
        const segmentsKey = `${segment.duration} - ${segment.destination} - ${segment.origin}`;
        return <TicketSegment segment={segment} key={segmentsKey} />;
      })}
    </div>
  );
}

export default TicketListItem;
