import classNames from 'classnames/bind';
import styles from './Action.module.scss';

const cx = classNames.bind(styles);

function Action({ data }) {
  if (data.type === 'a') {
    return (
      <a className={cx('wrapper')} href={data.link}>
        {data.title}
      </a>
    );
  } else {
    return (
      <div className={cx('my-dropdown')}>
        <button type="button" className={cx('dropdown-toggle', 'wrapper')}>
          {data.title}
        </button>
        <div className={cx('dropdown-menu', 'dropdown-wrapper')}>
          {data.items.map((item, index) => (
            <a
              className={cx('dropdown-item', 'drd-item')}
              key={index}
              href={item.link}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default Action;
