import { RefCallBack } from 'react-hook-form';

export default interface InputInterface {
  label?: string;
  type?: 'text' | 'number' | 'password';
  className?: string;
  placeholder?: string;
  ref?: RefCallBack;
  helpText?: string;
  isError?: boolean;
}
