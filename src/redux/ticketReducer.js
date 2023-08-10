import {
    GET_SEARCH_ID,
    TICKETS_LOAD,
    FILTER_TICKET,
    START_LOADING,
    STOP_LOADING,
    NO_TICKETS_FOUND,
    CHEAPEST_TICKETS, FIVE_TICKETS
} from "./types";

const initialState = {
    searchId: null,
    tickets: [],
    allTickets: [],
    loading: false,
    noTicketsFounds: false,
    fiveTickets: 5,
};

export const ticketReducer = (state = initialState, action) => {
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
                allTickets: [...state.allTickets, ...action.tickets],
                tickets: [...state.tickets, ...action.tickets],
            }
        case FILTER_TICKET:
            return {
                ...state,
                tickets: action.payload,
            }
        case START_LOADING:
            return {
                ...state,
                loading: true,
            }
        case STOP_LOADING:
            return {
                ...state,
                loading: false,
            }
        case NO_TICKETS_FOUND:
            return {
                ...state,
                noTicketsFounds: true,
            }
        case CHEAPEST_TICKETS:
            return {
                ...state,
                tickets: action.payload,
            }
        case FIVE_TICKETS:
            return {
                ...state,
                fiveTickets: state.fiveTickets + action.payload,
            }

        default:
            return state;
    }
}

