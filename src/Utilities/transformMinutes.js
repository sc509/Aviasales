export function transformMinutes(minutes) {
    const lastDigit = minutes % 10;
    if ((minutes >= 10 && minutes <= 20) || lastDigit >= 5 || lastDigit === 0) {
        return 'минут';
    } else if (lastDigit === 1) {
        return 'минута';
    } else {
        return 'минуты';
    }
}