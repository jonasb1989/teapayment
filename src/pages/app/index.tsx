import { CitiesList, CityWeatherDetails } from './components';

import * as Styles from './styles';

export function App() {
  return (
    <Styles.Main>
      <CitiesList />
      <CityWeatherDetails />
    </Styles.Main>
  );
}
