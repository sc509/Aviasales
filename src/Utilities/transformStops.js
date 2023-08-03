export function transformStops(stops) {
    const lastDigit = stops % 10;
    if (stops === 0) {
        return 'Без пересадок';
    } else if ((stops >= 10 && stops <= 20) || lastDigit >= 5 || lastDigit === 0) {
        return 'пересадок';
    } else if (lastDigit === 1) {
        return 'пересадка';
    } else {
        return 'пересадки';
    }
}