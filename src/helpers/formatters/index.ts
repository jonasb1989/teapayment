const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

export function getWeekDay(date: number) {
  return new Date(date * 1000).toLocaleDateString('en', {
    weekday: 'long',
  });
}

export function getRoundedNumber(value: number) {
  return value.toFixed(0);
}

export function getWinterDirections(value: number) {
  const directionIndex = Math.round(value / 45) % 8;
  return directions[directionIndex];
}

export function getKmHourFromMSec(value: number) {
  return (value * 3.6).toFixed(0);
}
