import { useEffect, useState } from 'react';
import { getWeatherData, DayWeatherProps } from '~/services';
import { CitiesList, CityWeatherDetails } from './components';

const daysRange = 5;

const cities = [
  {
    name: 'Porto Alegre',
    lat: -30.033056,
    lon: -51.23,
  },
  {
    name: 'Dublin',
    lat: 53.35014,
    lon: -6.266155,
  },
  {
    name: 'Reykjavik',
    lat: 64.1353,
    lon: -21.8952,
  },
  {
    name: 'Lisbon',
    lat: 38.736946,
    lon: -9.142685,
  },
];

export function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [weatherDataList, setWeatherDataList] = useState([]);

  function handleIsActive(cityName: string) {
    return selectedCity.name === cityName;
  }

  async function handleGetWeatherData() {
    setIsLoading(true);
    const { lat, lon } = selectedCity;
    const { data } = await getWeatherData(lat, lon);
    const daysInRange = data.daily.filter(
      (day: DayWeatherProps, index: number) => index < daysRange,
    );

    setWeatherDataList(daysInRange);
    setIsLoading(false);
  }

  useEffect(() => {
    handleGetWeatherData();
  }, [selectedCity]);

  return (
    <>
      <CitiesList
        cities={cities}
        onIsActive={handleIsActive}
        onSelectCity={setSelectedCity}
      />
      <CityWeatherDetails
        isLoading={isLoading}
        weatherDataList={weatherDataList}
      />
    </>
  );
}
