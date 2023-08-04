import {ALL_CHECKED, UN_CHECKED_ALL, TOGGLE_CHECK, TICKETS_LOAD, GET_SEARCH_ID, FILTER_TICKET, START_LOADING, STOP_LOADING} from "./types";

export function filterAllChecked() {
    return {
        type: ALL_CHECKED,
    }
}

export function filterAllUnchecked() {
    return {
        type: UN_CHECKED_ALL,
    }
}

export const toggleCheck = (name) => ({
    type: TOGGLE_CHECK,
    payload: name,
});

export function startLoading(){
    return{
        type: START_LOADING,
    }
}export function stopLoading(){
    return{
        type: STOP_LOADING,
    }
}

export function getSearchId(){
    return async dispatch => {
        let searchId = localStorage.getItem('searchId');
        if (!searchId) {
            const response = await fetch('https://aviasales-test-api.kata.academy/search');
            const jsonSearchId = await response.json();
            searchId = jsonSearchId.searchId;
            localStorage.setItem('searchId', searchId);
        }
        dispatch({
            type: GET_SEARCH_ID,
            searchId,
        })
    }
}

export function getStackTickets(searchId){
    return async dispatch => {
        if (!searchId) {
            return;
        }
        dispatch(startLoading());
        let intervalId;

        const fetchTickets = async () => {
            try {
                const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const jsonTickets = await response.json();

                if (jsonTickets.stop) {
                    clearInterval(intervalId);
                    dispatch(stopLoading());
                }

                dispatch({
                    type: TICKETS_LOAD,
                    tickets: jsonTickets.tickets,
                });
            } catch (error) {
                if (error.message.includes('500')) {
                } else {
                    clearInterval(intervalId);
                    dispatch(stopLoading());
                }
            }
        };

        intervalId = setInterval(fetchTickets, 1000);
    }
}


export function filterTickets() {
    return (dispatch, getState) => {
        const { tickets } = getState().ticket;
        const {allChecked, oneChecked, twoChecked, threeChecked, fourChecked } = getState().filter;

        let filteredTickets;
        let ticketsCopy = [...tickets];
        if (allChecked) {
            filteredTickets = ticketsCopy;
        } else {
            filteredTickets = tickets.filter(ticket =>
                (oneChecked && ticket.segments.every(segment => segment.stops.length === 0)) ||
                (twoChecked && ticket.segments.every(segment => segment.stops.length === 1)) ||
                (threeChecked && ticket.segments.every(segment => segment.stops.length === 2)) ||
                (fourChecked && ticket.segments.every(segment => segment.stops.length === 3))
            );
        }

        dispatch({
            type: FILTER_TICKET,
            payload: filteredTickets,
        });
    }
}