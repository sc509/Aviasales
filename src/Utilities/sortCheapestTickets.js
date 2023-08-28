import matchesFilter from './matchesFilter';

export default function sortCheapestTickets(tickets, oneChecked, twoChecked, threeChecked, fourChecked) {
  const filteredTickets = tickets.filter((ticket) =>
    matchesFilter(ticket, oneChecked, twoChecked, threeChecked, fourChecked)
  );

  function compareByPrice(a, b) {
    return a.price - b.price;
  }

  return [...filteredTickets].sort(compareByPrice);
}
