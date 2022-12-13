import { DayWeatherProps } from '~/services';
import { Card, PageLoader } from '~/components';

import * as Styles from './styles';

interface CityWeatherDetailsProps {
  isLoading: boolean;
  weatherDataList: DayWeatherProps[];
}

export function CityWeatherDetails({
  isLoading,
  weatherDataList,
}: CityWeatherDetailsProps) {
  return (
    <Styles.Main>
      <PageLoader isLoading={isLoading}>
        <Styles.DaysList>
          {weatherDataList.map((data) => (
            <Styles.ListItem key={data.dt}>
              <Card weatherData={data} />
            </Styles.ListItem>
          ))}
        </Styles.DaysList>
      </PageLoader>
    </Styles.Main>
  );
}
