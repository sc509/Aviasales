import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSearchId, getStackTickets } from '../../redux/actions';
import TicketListItem from '../ticket-list-item/ticket-list-item';
import ShowMore from '../show-more/show-more';

import styles from './ticket-list.module.scss';

function TicketList() {
  const { error, aviasalesTicketList } = styles;
  const dispatch = useDispatch();
  const searchId = useSelector((state) => state.ticket.searchId);
  const tickets = useSelector((state) => state.ticket.tickets);
  const noTicketsFounds = useSelector((state) => state.ticket.noTicketsFounds);

  const [visibleTickets, setVisibleTickets] = useState(5);

  useEffect(() => {
    if (!searchId) {
      dispatch(getSearchId()).then((newSearchId) => {
        dispatch(getStackTickets(newSearchId));
      });
    } else {
      dispatch(getStackTickets(searchId));
    }
  }, [dispatch, searchId]);

  const handleShowMoreClick = () => {
    setVisibleTickets((prevVisibleTickets) => prevVisibleTickets + 5);
  };

  if (noTicketsFounds) {
    return <div className={error}>Рейсов, подходящих под заданные фильтры, не найдено</div>;
  }

  return (
    <div className={aviasalesTicketList}>
      {tickets.slice(0, visibleTickets).map((ticket) => {
        const ticketKey = `${ticket.carrier}-${ticket.segments[0].date}-${ticket.segments[1].date}`;
        return <TicketListItem key={ticketKey} ticket={ticket} />;
      })}
      {visibleTickets < tickets.length && <ShowMore ticketCount={5} onClick={handleShowMoreClick} />}
    </div>
  );
}

export default TicketList;
