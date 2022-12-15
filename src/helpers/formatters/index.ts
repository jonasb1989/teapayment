const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

export function getWeekDay(date: number) {
  return new Date(date * 1000).toLocaleDateString('en', {
    weekday: 'long',
  });
}

export function getRoundedNumber(number: number) {
  return number.toFixed(0);
}

export function getWinterDirections(angle: number) {
  const directionIndex = Math.round(angle / 45) % 8;
  return directions[directionIndex];
}

export function getKmHourFromMSec(value: number) {
  return (value * 3.6).toFixed(0);
}
