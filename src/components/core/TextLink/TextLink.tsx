import classNames from 'classnames';
import styles from './TextLink.module.sass';
import TextLinkInterface from './TextLink.interface.ts';

const TextLink = ({ href, children, className }: TextLinkInterface) => {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      className={classNames(styles.link, className)}
    >
      {children}
    </a>
  );
};

export default TextLink;
