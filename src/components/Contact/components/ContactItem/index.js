import classNames from 'classnames/bind';
import styles from './ContactItem.module.scss';

const cx = classNames.bind(styles);

function ContactItem({ data }) {
  return (
    <div className={cx('wrapper')}>
      {data.icon}
      <p className={cx('contact-text')}>{data.contact}</p>
    </div>
  );
}

export default ContactItem;
