import {ALL_CHECKED, UN_CHECKED_ALL, TOGGLE_CHECK, TICKETS_LOAD, GET_SEARCH_ID } from "./types";

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
        let stop = false;
        let errorCount = 0;
        const maxErrorCount = 5;

        while (!stop) {
            try {
                const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const jsonTickets = await response.json();
                stop = jsonTickets.stop;

                dispatch({
                    type: TICKETS_LOAD,
                    tickets: jsonTickets.tickets,
                });
            } catch (error) {
                console.error(`There was a problem with your fetch operation: ${error.message}`);
                errorCount += 1;
                if (errorCount >= maxErrorCount) {
                    console.error(`Max error count reached. Stopping fetch operation.`);
                    break;
                }
            }
        }
    }
}