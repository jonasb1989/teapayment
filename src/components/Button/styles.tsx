import styled, { css } from 'styled-components';

interface ButtonProps {
  isActive?: boolean;
}

const buttonActiveStyles = css`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  border-color: ${({ theme }) => theme.colors.white};
`;

export const Button = styled('button')<ButtonProps>`
  text-transform: uppercase;
  padding: 1rem 1.125rem;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  cursor: pointer;
  width: 100%;
  font-size: ${({ theme }) => theme.typography.sizeNormal};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.typography.familyBold};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing};

  &:hover {
    ${buttonActiveStyles}
  }

  ${({ isActive }) => isActive && buttonActiveStyles}
`;
