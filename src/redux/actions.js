import {
  ALL_CHECKED,
  UN_CHECKED_ALL,
  TOGGLE_CHECK,
  TICKETS_LOAD,
  GET_SEARCH_ID,
  FILTER_TICKET,
  START_LOADING,
  STOP_LOADING,
  NO_TICKETS_FOUND,
  CHEAPEST_TICKETS,
  FIVE_TICKETS,
  FASTEST_TICKETS,
} from './types';

const BASE_URL = 'https://aviasales-test-api.kata.academy';

export function filterAllChecked() {
  return {
    type: ALL_CHECKED,
  };
}

export function filterAllUnchecked() {
  return {
    type: UN_CHECKED_ALL,
  };
}

export const toggleCheck = (name) => ({
  type: TOGGLE_CHECK,
  payload: name,
});

export function startLoading() {
  return {
    type: START_LOADING,
  };
}

export function stopLoading() {
  return {
    type: STOP_LOADING,
  };
}

export function getSearchId() {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/search`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const { searchId } = await response.json();

      dispatch({
        type: GET_SEARCH_ID,
        searchId,
      });
    } catch (error) {
      throw new Error(`Failed to fetch search ID: ${error}`);
    }
  };
}

export function getStackTickets(searchId) {
  return async (dispatch) => {
    if (!searchId) {
      return;
    }
    dispatch(startLoading());

    const fetchTickets = async () => {
      try {
        const response = await fetch(`${BASE_URL}/tickets?searchId=${searchId}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonTickets = await response.json();

        if (jsonTickets.stop) {
          dispatch(stopLoading());
          return false;
        }

        dispatch({
          type: TICKETS_LOAD,
          tickets: jsonTickets.tickets,
        });

        return true;
      } catch (error) {
        if (!error.message.includes('500')) {
          dispatch(stopLoading());
          return false;
        }
        return true;
      }
    };

    let keepFetching = true;
    while (keepFetching) {
      keepFetching = await fetchTickets();
    }
  };
}

export function filterTickets() {
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

export function cheapestTickets() {
  return (dispatch, getState) => {
    const { tickets } = getState().ticket;

    function compareByPrice(a, b) {
      return a.price - b.price;
    }

    const cheapest = [...tickets].sort(compareByPrice);

    dispatch({
      type: CHEAPEST_TICKETS,
      payload: cheapest,
    });
  };
}

export function fastestTickets() {
  return (dispatch, getState) => {
    const { tickets } = getState().ticket;

    const minDuration = Math.min(...tickets.flatMap((ticket) => ticket.segments.map((segment) => segment.duration)));

    function compareByEqualDurations(a, b) {
      const diffA = Math.abs(a.segments[0].duration - minDuration) + Math.abs(a.segments[1].duration - minDuration);
      const diffB = Math.abs(b.segments[0].duration - minDuration) + Math.abs(b.segments[1].duration - minDuration);

      return diffA - diffB;
    }

    const fastest = [...tickets].sort(compareByEqualDurations);

    dispatch({
      type: FASTEST_TICKETS,
      payload: fastest,
    });
  };
}

export function showMoreTickets(amount) {
  return {
    type: FIVE_TICKETS,
    payload: amount,
  };
}
