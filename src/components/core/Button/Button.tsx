import classNames from 'classnames';

import ButtonInterface from './Button.interface.ts';
import Spinner from '../../../assets/spinner.svg';

import styles from './Button.module.sass';

const Button = ({
  children,
  type = 'button',
  size = 'normal',
  variant = 'secondary',
  loading = false,
  ...rest
}: ButtonInterface) => {
  return (
    <button
      {...rest}
      type={type}
      className={classNames(styles.button, styles[variant], styles[size], {
        [styles.loading]: loading
      })}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
