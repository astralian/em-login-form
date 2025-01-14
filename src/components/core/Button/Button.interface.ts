import { ReactNode } from 'react';

export default interface ButtonInterface {
  children: ReactNode;
  size?: 'normal' | 'large';
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
}
