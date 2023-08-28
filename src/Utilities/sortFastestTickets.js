import matchesFilter from './matchesFilter';

export default function sortFastestTickets(tickets, oneChecked, twoChecked, threeChecked, fourChecked) {
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

  return [...filteredTickets].sort(compareByEqualDurations);
}
