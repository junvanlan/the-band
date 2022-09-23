import classNames from 'classnames/bind';
import styles from './ContactInput.module.scss';

const cx = classNames.bind(styles);

function ContactInput({ holder, type }) {
  return (
    <input className={cx('input')} placeholder={holder} type={type} required />
  );
}

export default ContactInput;
