import {GET_SEARCH_ID, TICKETS_LOAD} from "./types";

const initialState = {
    searchId: null,
    tickets: [],
};

export const ticketReducer = (state = initialState, action) => {
    console.log(action)
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
        default:
            return state;
    }
}

