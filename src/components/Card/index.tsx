import { DayWeatherProps } from '~/services';
import { getWeekDay, getRoundedNumber } from '~/helpers';

import * as Styles from './styles';

interface CardProps {
  weatherData: DayWeatherProps;
}

export function Card({ weatherData }: CardProps) {
  return (
    <Styles.Card>
      <Styles.Day>{getWeekDay(weatherData.dt)}</Styles.Day>
      <Styles.Icon
        alt="Weather icon"
        src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
      />
      <Styles.Weather>{getRoundedNumber(weatherData.temp.day)}°</Styles.Weather>
      <Styles.Footer>
        <Styles.Info>
          <span>
            min
            <br />
            {getRoundedNumber(weatherData.temp.min)}°
          </span>
          <span>
            win speed
            <br />
            {getRoundedNumber(weatherData.wind_speed)}
          </span>
        </Styles.Info>
        <Styles.Info>
          <span>
            max
            <br />
            {getRoundedNumber(weatherData.temp.max)}°
          </span>
          <span>
            win dir
            <br />
            25
          </span>
        </Styles.Info>
      </Styles.Footer>
    </Styles.Card>
  );
}
