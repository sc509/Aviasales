import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSearchId, getStackTickets } from '../../redux/actions';
import TicketListItem from '../ticket-list-item/ticket-list-item';
import ShowMore from '../show-more/show-more';

import styles from './ticket-list.module.scss';

function TicketList() {
  const { aviasalesTicketList, errorTickets } = styles;
  const dispatch = useDispatch();
  const searchId = useSelector((state) => state.ticket.searchId);
  const allTickets = useSelector((state) => state.ticket.tickets);
  const loading = useSelector((state) => state.ticket.loading);
  const filters = useSelector((state) => state.filter);
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

  const isAnyFilterChecked = Object.values(filters).some((value) => value);

  const isAllFilterChecked = filters.allChecked;

  let ticketsToDisplay;
  if (isAllFilterChecked) {
    ticketsToDisplay = allTickets;
  } else if (isAnyFilterChecked) {
    ticketsToDisplay = allTickets;
  } else {
    ticketsToDisplay = [];
  }

  return (
    <div className={aviasalesTicketList}>
      {ticketsToDisplay.slice(0, visibleTickets).map((ticket) => {
        const ticketKey = `${ticket.carrier}-${ticket.segments[0].date}-${ticket.segments[1].date}`;
        return <TicketListItem key={ticketKey} ticket={ticket} />;
      })}
      {ticketsToDisplay.length > visibleTickets && <ShowMore ticketCount={5} onClick={handleShowMoreClick} />}
      {!loading && ticketsToDisplay.length === 0 && <div className={errorTickets}>Билеты не найдены</div>}
    </div>
  );
}

export default TicketList;
