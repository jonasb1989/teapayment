import axios from 'axios';

const { get } = axios;
const baseUrl = 'https://api.openweathermap.org/data/3.0/onecall';
const exclude = 'current,minutely,hourly,alerts';
const units = 'metric';
const apiKey = import.meta.env.VITE_OPEN_WEATHER_KEY;

export async function getWeatherData(lat: number, lon: number) {
  const response = await get(baseUrl, {
    params: {
      lat,
      lon,
      exclude,
      units,
      apiKey,
    },
  });

  return response;
}
