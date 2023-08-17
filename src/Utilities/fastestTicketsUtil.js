import { FASTEST_TICKETS } from '../redux/types';

export default function fastestTicketsUtil() {
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
