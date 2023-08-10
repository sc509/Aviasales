import {
    ALL_CHECKED,
    UN_CHECKED_ALL,
    TOGGLE_CHECK,
    TICKETS_LOAD,
    GET_SEARCH_ID,
    FILTER_TICKET,
    START_LOADING,
    STOP_LOADING,
    NO_TICKETS_FOUND, CHEAPEST_TICKETS, FIVE_TICKETS
} from "./types";

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
        const { allTickets } = getState().ticket;
        const {allChecked, oneChecked, twoChecked, threeChecked, fourChecked } = getState().filter;

        if (!(allChecked || oneChecked || twoChecked || threeChecked || fourChecked)) {
            dispatch({
                type: FILTER_TICKET,
                payload: allTickets,
            });
            return;
        }

        let filteredTickets = [];
        let ticketsCopy = [...allTickets];

        if (allChecked) {
            filteredTickets = ticketsCopy;
        } else {
            ticketsCopy.forEach(ticket => {
                const outboundSegmentMatches = (oneChecked && ticket.segments[0].stops.length === 0)
                    || (twoChecked && ticket.segments[0].stops.length === 1)
                    || (threeChecked && ticket.segments[0].stops.length === 2)
                    || (fourChecked && ticket.segments[0].stops.length === 3);

                const returnSegmentMatches = (oneChecked && ticket.segments[1].stops.length === 0)
                    || (twoChecked && ticket.segments[1].stops.length === 1)
                    || (threeChecked && ticket.segments[1].stops.length === 2)
                    || (fourChecked && ticket.segments[1].stops.length === 3);

                if (outboundSegmentMatches && returnSegmentMatches) {
                    filteredTickets.push(ticket);
                }
            });
        }

        if (filteredTickets.length === 0) {
            dispatch({ type: NO_TICKETS_FOUND})
        }

        dispatch({
            type: FILTER_TICKET,
            payload: filteredTickets,
        });
    }
}

export function cheapestTickets(){
    return(dispatch, getState) => {
        const { tickets } = getState().ticket;

        function compareByPrice(a, b) {
            return a.price - b.price;
        }

        const cheapest = tickets.sort(compareByPrice)

        dispatch({
            type: CHEAPEST_TICKETS,
            payload: cheapest,
        })
    }
}

export function showMoreTickets (amount)  {
    return {
        type: FIVE_TICKETS,
        payload: amount,
    };
}