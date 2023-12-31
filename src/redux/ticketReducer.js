import {
  GET_SEARCH_ID,
  TICKETS_LOAD,
  FILTER_TICKET,
  START_LOADING,
  STOP_LOADING,
  NO_TICKETS_FOUND,
  CHEAPEST_TICKETS,
  FASTEST_TICKETS,
} from './types';

const initialState = {
  searchId: null,
  tickets: [],
  loading: false,
  noTicketsFounds: false,
};

const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_ID:
      return {
        ...state,
        searchId: action.searchId,
      };
    case TICKETS_LOAD:
      return {
        ...state,
        noTicketsFounds: false,
        tickets: [...state.tickets, ...action.tickets],
      };
    case FILTER_TICKET:
      return {
        ...state,
        tickets: action.payload,
      };
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case NO_TICKETS_FOUND:
      return {
        ...state,
        noTicketsFounds: true,
      };
    case CHEAPEST_TICKETS:
      return {
        ...state,
        tickets: action.payload,
      };
    case FASTEST_TICKETS:
      return {
        ...state,
        tickets: action.payload,
      };
    default:
      return state;
  }
};

export default ticketReducer;
