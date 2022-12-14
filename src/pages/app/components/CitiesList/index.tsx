import { Button } from '~/components';

import { CityProps } from '../../index';

import * as Styles from './styles';

interface CitiesListProps {
  cities: CityProps[];
  onIsActive: (cityName: string) => boolean | undefined;
  onSelectCity: (city: CityProps) => void;
}

export function CitiesList({
  cities,
  onIsActive,
  onSelectCity,
}: CitiesListProps) {
  return (
    <Styles.Header>
      <Styles.CitiesList>
        {cities.map((city) => (
          <Styles.ListItem key={city.name}>
            <Button
              isActive={onIsActive(city.name)}
              onClick={() => onSelectCity(city)}
            >
              {city.name}
            </Button>
          </Styles.ListItem>
        ))}
      </Styles.CitiesList>
    </Styles.Header>
  );
}
