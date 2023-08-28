import removeDuplicates from './removeDuplicates';
import matchesFilter from './matchesFilter';

export default function cheapestTicketsUtil(tickets, filter) {
  const { oneChecked, twoChecked, threeChecked, fourChecked } = filter;

  const filteredTickets = tickets.filter((ticket) =>
    matchesFilter(ticket, oneChecked, twoChecked, threeChecked, fourChecked)
  );

  function compareByPrice(a, b) {
    return a.price - b.price;
  }

  const cheapest = [...filteredTickets].sort(compareByPrice);
  const ticketsCheapest = [...cheapest, ...tickets];

  const ticketsCheapestWithoutDuplicates = removeDuplicates(ticketsCheapest);
  return ticketsCheapestWithoutDuplicates;
}
