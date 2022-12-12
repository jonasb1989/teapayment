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
    name: 'Lisboa',
    lat: -30.033056,
    lon: -51.23,
  },
];

export function CitiesList() {
  return (
    <Styles.Header>
      {cities.map((citie) => (
        <Button key={citie.name}>{citie.name}</Button>
      ))}
    </Styles.Header>
  );
}
