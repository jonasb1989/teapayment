import styled, { keyframes } from 'styled-components';

const opacityTransition = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

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
  animation-name: ${opacityTransition};
  animation-duration: 0.5s;
`;
