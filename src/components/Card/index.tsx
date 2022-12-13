import { DayWeatherProps } from '~/services';
import { getWeekDay, getRoundedNumber } from '~/helpers';

import * as Styles from './styles';

interface CardProps {
  weatherData: DayWeatherProps;
}

export function Card({ weatherData }: CardProps) {
  const weekday = getWeekDay(weatherData.dt);

  return (
    <Styles.Card>
      <h4>{weekday}</h4>
      <Styles.Icon
        alt="Weather icon"
        src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
      />
      <Styles.Weather>{getRoundedNumber(weatherData.temp.day)}°</Styles.Weather>
      <Styles.ExtraInfo>
        <span>
          min
          <br />
          {getRoundedNumber(weatherData.temp.min)}°
        </span>
        <span>
          max
          <br />
          {getRoundedNumber(weatherData.temp.max)}°
        </span>
      </Styles.ExtraInfo>
      <Styles.ExtraInfo>
        <span>
          win speed
          <br />
          {getRoundedNumber(weatherData.wind_speed)}
        </span>
        <span>
          win dir
          <br />
          25
        </span>
      </Styles.ExtraInfo>
    </Styles.Card>
  );
}
