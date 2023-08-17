import { FILTER_TICKET, NO_TICKETS_FOUND } from '../redux/types';

export default function filterTicketsUtil() {
  return (dispatch, getState) => {
    const { allTickets } = getState().ticket;
    const { allChecked, oneChecked, twoChecked, threeChecked, fourChecked } = getState().filter;

    if (!(allChecked || oneChecked || twoChecked || threeChecked || fourChecked)) {
      dispatch({
        type: FILTER_TICKET,
        payload: allTickets,
      });
      return;
    }

    let filteredTickets = [];
    const ticketsCopy = [...allTickets];

    if (allChecked) {
      filteredTickets = ticketsCopy;
    } else {
      ticketsCopy.forEach((ticket) => {
        const outboundSegmentMatches =
          (oneChecked && ticket.segments[0].stops.length === 0) ||
          (twoChecked && ticket.segments[0].stops.length === 1) ||
          (threeChecked && ticket.segments[0].stops.length === 2) ||
          (fourChecked && ticket.segments[0].stops.length === 3);

        const returnSegmentMatches =
          (oneChecked && ticket.segments[1].stops.length === 0) ||
          (twoChecked && ticket.segments[1].stops.length === 1) ||
          (threeChecked && ticket.segments[1].stops.length === 2) ||
          (fourChecked && ticket.segments[1].stops.length === 3);

        if (outboundSegmentMatches && returnSegmentMatches) {
          filteredTickets.push(ticket);
        }
      });
    }

    if (filteredTickets.length === 0) {
      dispatch({ type: NO_TICKETS_FOUND });
    }

    dispatch({
      type: FILTER_TICKET,
      payload: filteredTickets,
    });
  };
}
