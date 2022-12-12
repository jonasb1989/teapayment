import { ButtonHTMLAttributes } from 'react';

import * as Styles from './styles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...props }: ButtonProps) {
  return <Styles.Button {...props}>{children}</Styles.Button>;
}
