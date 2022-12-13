import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: ${spinner};
  border: 10px solid ${({ theme }) => theme.colors.blue};
  border-top: 10px solid ${({ theme }) => theme.colors.white};
`;

export const Loader = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
