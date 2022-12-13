import { ButtonHTMLAttributes } from 'react';

import * as Styles from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

export function Button({ children, isActive, ...props }: ButtonProps) {
  return (
    <Styles.Button isActive={isActive} {...props}>
      {children}
    </Styles.Button>
  );
}
