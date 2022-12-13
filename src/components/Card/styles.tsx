import styled from 'styled-components';

export const Card = styled('div')`
  border-radius: 8px;
  padding: 1rem 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing};
  background-color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.typography.familyRegular};
  border: 1px solid ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  color: ${({ theme }) => theme.colors.white};

  h4 {
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.typography.sizeMedium};
    font-family: ${({ theme }) => theme.typography.familyBold};
  }
`;

export const Weather = styled('span')`
  font-family: ${({ theme }) => theme.typography.familyBold};
  font-size: ${({ theme }) => theme.typography.sizeLarge};
`;

export const Icon = styled('img')`
  margin: 1rem 0;
`;

export const ExtraInfo = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.875rem;

  span {
    font-family: ${({ theme }) => theme.typography.familyBold};
    font-size: ${({ theme }) => theme.typography.sizeSmall};
  }
`;
