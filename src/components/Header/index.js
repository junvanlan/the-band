import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FaBars, FaSearch } from 'react-icons/fa';

import Action from './components/Action';

const cx = classNames.bind(styles);

function Header() {
  const actions = [
    {
      title: 'HOME',
      link: '/',
      type: 'a',
    },
    {
      title: 'BAND',
      link: '#band',
      type: 'a',
    },
    {
      title: 'TOUR',
      link: '#TOUR',
      type: 'a',
    },
    {
      title: 'CONTACT',
      link: '#contact',
      type: 'a',
    },
    {
      title: 'MORE',
      link: null,
      type: 'dropdown',
      items: [
        {
          title: 'Merchandise',
          link: '#',
          type: 'a',
        },
        {
          title: 'Extras',
          link: '#',
          type: 'a',
        },
        {
          title: 'Media',
          link: '#',
          type: 'a',
        },
      ],
    },
  ];
  return (
    <div className={cx('wrapper')}>
      <div className={cx('aciton')}>
        {actions.map((action, index) => (
          <Action key={index} data={action} />
        ))}
      </div>
      <div className={cx('right-action')}>
        <FaSearch className={cx('icon', 'hide-phone')} />
        <FaBars className={cx('icon', 'show-phone')} />
      </div>
    </div>
  );
}

export default Header;
