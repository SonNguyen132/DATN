export function getTimeFromMinutes(totalMinutes?: number) {
    return totalMinutes && Math.floor(totalMinutes / 60) + 'h : ' + totalMinutes % 60 + 'minutes';
}
