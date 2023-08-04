import {GET_SEARCH_ID, TICKETS_LOAD, FILTER_TICKET, START_LOADING, STOP_LOADING} from "./types";

const initialState = {
    searchId: null,
    tickets: [],
    loading: false,
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
        default:
            return state;
    }
}

