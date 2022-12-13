import { DayWeatherProps } from '~/services';
import { Card } from '~/components';

import * as Styles from './styles';

interface CityWeatherDetailsProps {
  weatherDataList: DayWeatherProps[];
}

export function CityWeatherDetails({
  weatherDataList,
}: CityWeatherDetailsProps) {
  return (
    <Styles.Main>
      <Styles.DaysList>
        {weatherDataList.map((data) => (
          <Styles.ListItem>
            <Card weatherData={data} />
          </Styles.ListItem>
        ))}
      </Styles.DaysList>
    </Styles.Main>
  );
}
