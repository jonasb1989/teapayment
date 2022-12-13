import styled from 'styled-components';

export const Main = styled('main')`
  position: relative;
`;

export const DaysList = styled('ul')`
  width: 100%;
  position: absolute;
  top: -8rem;
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 1rem 0;
`;

export const ListItem = styled('li')`
  padding: 0.375rem;
  width: 20%;

  span {
    text-align: center;
  }
`;
