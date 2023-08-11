import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSearchId, getStackTickets } from '../../redux/actions';
import TicketListItem from '../ticket-list-item/ticket-list-item';

import styles from './ticket-list.module.scss';

function TicketList() {
  const { error, aviasalesTicketList } = styles;
  const dispatch = useDispatch();
  const searchId = useSelector((state) => state.ticket.searchId);
  const tickets = useSelector((state) => state.ticket.tickets);
  const fiveTickets = useSelector((state) => state.ticket.fiveTickets);
  const noTicketsFounds = useSelector((state) => state.ticket.noTicketsFounds);
  useEffect(() => {
    if (!searchId) {
      dispatch(getSearchId()).then((newSearchId) => {
        dispatch(getStackTickets(newSearchId));
      });
    } else {
      dispatch(getStackTickets(searchId));
    }
  }, [dispatch, searchId]);

  if (noTicketsFounds) {
    return <div className={error}>Рейсов, подходящих под заданные фильтры, не найдено</div>;
  }

  return (
    <div className={aviasalesTicketList}>
      {tickets.slice(0, fiveTickets).map((ticket) => {
        const ticketKey = `${ticket.carrier}-${ticket.segments[0].date}-${ticket.segments[1].date}`;
        return <TicketListItem key={ticketKey} ticket={ticket} />;
      })}
    </div>
  );
}

export default TicketList;
