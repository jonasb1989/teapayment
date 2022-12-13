import axios from 'axios';

const { get } = axios;
const baseUrl = 'https://api.openweathermap.org/data/3.0/onecall';
const apiKey = '45fce8ac5ae89ef5ad4ff351d17d3cd1';
const exclude = 'current,minutely,hourly,alerts';
const units = 'metric';

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
