import { forwardRef, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Input.module.sass';
import InputInterface from './Input.interface.ts';

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & InputInterface>(
  ({ className, label, type = 'text', isError = false, helpText, ...rest }, ref) => {
    return (
      <label className={styles.wrap}>
        {label && <div className={styles.label}>{label}</div>}
        <input
          type={type}
          ref={ref}
          className={classNames(styles.input, className, {
            [styles.error]: isError
          })}
          {...rest}
        />
        {helpText && (
          <div
            className={classNames(styles.label, styles.helper, className, {
              [styles.error]: isError
            })}
          >
            {helpText}
          </div>
        )}
      </label>
    );
  }
);

export default Input;
