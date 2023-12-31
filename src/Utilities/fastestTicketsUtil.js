import matchesFilter from './matchesFilter';
import removeDuplicates from './removeDuplicates';

export default function fastestTicketsUtil(tickets, filter) {
  const { oneChecked, twoChecked, threeChecked, fourChecked } = filter;

  const filteredTickets = tickets.filter((ticket) =>
    matchesFilter(ticket, oneChecked, twoChecked, threeChecked, fourChecked)
  );

  const minDuration = Math.min(
    ...filteredTickets.flatMap((ticket) => ticket.segments.map((segment) => segment.duration))
  );

  function compareByEqualDurations(a, b) {
    const diffA = Math.abs(a.segments[0].duration - minDuration) + Math.abs(a.segments[1].duration - minDuration);
    const diffB = Math.abs(b.segments[0].duration - minDuration) + Math.abs(b.segments[1].duration - minDuration);

    return diffA - diffB;
  }

  const fastest = [...filteredTickets].sort(compareByEqualDurations);
  const ticketsFastest = [...fastest, ...tickets];
  const ticketsFastestWithoutDuplicates = removeDuplicates(ticketsFastest);
  return ticketsFastestWithoutDuplicates;
}
