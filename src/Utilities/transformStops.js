export default function transformStops(stops) {
  const lastDigit = stops % 10;
  if (stops === 0) {
    return 'Без пересадок';
  }
  if ((stops >= 10 && stops <= 20) || lastDigit >= 5 || lastDigit === 0) {
    return 'пересадок';
  }
  if (lastDigit === 1) {
    return 'пересадка';
  }
  return 'пересадки';
}
