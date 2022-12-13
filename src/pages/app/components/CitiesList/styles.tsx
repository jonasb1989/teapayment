import styled from 'styled-components';

export const Header = styled('header')`
  padding: 4rem 7rem;
  height: 30vh;
  background-color: ${({ theme }) => theme.colors.blue};
`;

export const CitiesList = styled('ul')`
  display: flex;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
`;

export const ListItem = styled('li')`
  width: 25%;
  padding: 0 1.125rem;
`;
