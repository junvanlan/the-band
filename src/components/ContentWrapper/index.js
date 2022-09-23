import classNames from 'classnames/bind';
import styles from './ContentWrapper.module.scss';

const cx = classNames.bind(styles);

function ContentWrapper({ data, dark = false, light = false, children }) {
  const classes = cx('wrapper', {
    dark,
    light,
  });
  return (
    <div className={classes}>
      <div className={cx('inner')}>
        <h1 className={cx('title')}>{data.title}</h1>
        <p className={cx('sub-title')}>{data.sub}</p>
        {children}
      </div>
    </div>
  );
}

export default ContentWrapper;
