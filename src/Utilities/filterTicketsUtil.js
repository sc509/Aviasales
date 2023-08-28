import matchesFilter from './matchesFilter';

export default function filterTicketsUtil(allTickets, allChecked, oneChecked, twoChecked, threeChecked, fourChecked) {
  if (!(allChecked || oneChecked || twoChecked || threeChecked || fourChecked)) {
    return allTickets;
  }

  return allTickets.sort((a, b) => {
    const aMatches = matchesFilter(a, oneChecked, twoChecked, threeChecked, fourChecked);
    const bMatches = matchesFilter(b, oneChecked, twoChecked, threeChecked, fourChecked);

    if (aMatches && !bMatches) return -1;
    if (!aMatches && bMatches) return 1;
    return 0;
  });
}
