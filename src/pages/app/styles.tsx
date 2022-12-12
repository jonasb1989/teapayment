import styled from 'styled-components';

export const Main = styled('main')`
  padding: 5rem;
  height: 100vh;
  box-sizing: border-box;
  font-family: RobotoMedium;
  letter-spacing: 0.15em;
  background-color: ${({ theme }) => theme.colors.blue};
`;
