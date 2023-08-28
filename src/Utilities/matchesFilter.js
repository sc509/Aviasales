export default function matchesFilter(ticket, oneChecked, twoChecked, threeChecked, fourChecked) {
  const outboundSegmentMatches =
    (oneChecked && ticket.segments[0].stops.length === 0) ||
    (twoChecked && ticket.segments[0].stops.length === 1) ||
    (threeChecked && ticket.segments[0].stops.length === 2) ||
    (fourChecked && ticket.segments[0].stops.length === 3);

  const returnSegmentMatches =
    (oneChecked && ticket.segments[1].stops.length === 0) ||
    (twoChecked && ticket.segments[1].stops.length === 1) ||
    (threeChecked && ticket.segments[1].stops.length === 2) ||
    (fourChecked && ticket.segments[1].stops.length === 3);

  return outboundSegmentMatches && returnSegmentMatches;
}
