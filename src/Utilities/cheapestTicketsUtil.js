import { CHEAPEST_TICKETS } from '../redux/types';

export default function cheapestTicketsUtil() {
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
