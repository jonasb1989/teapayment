import styled from 'styled-components';

export const Button = styled('button')`
  text-transform: uppercase;
  padding: 16px 18px;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.sizeNormal};
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.familyBold};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing};

  &:hover {
    border-color: ${({ theme }) => theme.colors.white};
  }
`;
