import styled from 'styled-components';

export const Main = styled('main')`
  position: relative;
`;

export const DaysList = styled('ul')`
  width: 100%;
  position: absolute;
  top: -2rem;
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

export const DayItem = styled('li')`
  padding: 0.375rem;
  width: calc(100% / 5);
`;
