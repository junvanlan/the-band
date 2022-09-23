import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaSnapchat,
  FaTwitter,
} from 'react-icons/fa';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('acc')}>
        <a href="/">
          <FaFacebookSquare className={cx('icon')} />
        </a>
        <a href="/">
          <FaInstagram className={cx('icon')} />
        </a>
        <a href="/">
          <FaSnapchat className={cx('icon')} />
        </a>
        <a href="/">
          <FaPinterestP className={cx('icon')} />
        </a>
        <a href="/">
          <FaTwitter className={cx('icon')} />
        </a>
        <a href="/">
          <FaLinkedinIn className={cx('icon')} />
        </a>
      </div>
      <p className={cx('footer-text')}>
        Powered by <a href="/">w3.css</a>
      </p>
    </div>
  );
}

export default Footer;
