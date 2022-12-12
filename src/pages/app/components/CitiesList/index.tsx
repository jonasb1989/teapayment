import { Button } from '~/components';

import * as Styles from './styles';

const cities = [
  {
    name: 'Porto Alegre',
    lat: -30.033056,
    lon: -51.23,
  },
  {
    name: 'Dublin',
    lat: -30.033056,
    lon: -51.23,
  },
  {
    name: 'Reykjavik',
    lat: -30.033056,
    lon: -51.23,
  },
  {
    name: 'Lisbon',
    lat: -30.033056,
    lon: -51.23,
  },
];

export function CitiesList() {
  return (
    <Styles.Header>
      <Styles.CitiesList>
        {cities.map((citie) => (
          <li key={citie.name}>
            <Button>{citie.name}</Button>
          </li>
        ))}
      </Styles.CitiesList>
    </Styles.Header>
  );
}
