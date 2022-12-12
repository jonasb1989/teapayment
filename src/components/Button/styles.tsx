import styled from 'styled-components';

export const Button = styled('button')`
  text-transform: uppercase;
  padding: 1rem 1.125rem;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.sizeNormal};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.typography.familyBold};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing};

  &:hover {
    border-color: ${({ theme }) => theme.colors.blue};
  }
`;
