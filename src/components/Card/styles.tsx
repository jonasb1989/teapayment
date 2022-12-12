import styled from 'styled-components';

export const Card = styled('div')`
  border-radius: 8px;
  padding: 1rem 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing};
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.familyRegular};
  border: 1px solid ${({ theme }) => theme.colors.blue};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};

  h4 {
    font-size: ${({ theme }) => theme.typography.sizeLarge};
    font-family: ${({ theme }) => theme.typography.familyBold};
  }
`;

export const CurrentWeather = styled('span')`
  font-family: ${({ theme }) => theme.typography.familyBold};
  font-size: ${({ theme }) => theme.typography.sizeLarge};
`;
