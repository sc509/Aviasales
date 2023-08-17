import {
  ALL_CHECKED,
  UN_CHECKED_ALL,
  TOGGLE_CHECK,
  TICKETS_LOAD,
  GET_SEARCH_ID,
  START_LOADING,
  STOP_LOADING,
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
          throw new Error(`Ошибка HTTP! Статус: ${response.status}`);
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

    let shouldContinue = true;
    while (shouldContinue) {
      shouldContinue = await fetchTickets();
    }
  };
}
