import styles from './Checkbox.module.sass';
import CheckboxInterface from './Checkbox.interface.ts';
import classNames from 'classnames';

const Checkbox = ({ label, disabled, ...rest }: CheckboxInterface) => {
  return (
    <label className={styles.container}>
      <input
        className={styles.input}
        disabled={disabled}
        type="checkbox"
        {...rest}
      />
      <span
        className={classNames(styles.toggle, {
          [styles.disabled]: disabled
        })}
      >
        Toggle
      </span>
      <span className={styles.label}>{label}</span>
    </label>
  );
};

export default Checkbox;
