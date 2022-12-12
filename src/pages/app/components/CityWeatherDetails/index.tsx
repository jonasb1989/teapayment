import { Card } from '~/components';

import * as Styles from './styles';

const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'];

export function CityWeatherDetails() {
  return (
    <Styles.Main>
      <Styles.DaysList>
        {days.map((day) => (
          <Styles.DayItem key={day}>
            <Card>{day}</Card>
          </Styles.DayItem>
        ))}
      </Styles.DaysList>
    </Styles.Main>
  );
}
