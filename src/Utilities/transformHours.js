export function transformHours(hours) {
    const lastDigit = hours % 10;
    if ((hours >= 10 && hours <= 20) || lastDigit >= 5 || lastDigit === 0) {
        return 'часов';
    } else if (lastDigit === 1) {
        return 'час';
    } else {
        return 'часа';
    }
}