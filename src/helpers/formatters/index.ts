export function getWeekDay(date: number) {
  return new Date(date * 1000).toLocaleDateString('en', {
    weekday: 'long',
  });
}

export function getRoundedNumber(value: number) {
  return value.toFixed(0);
}
