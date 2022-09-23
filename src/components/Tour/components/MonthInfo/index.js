import classNames from 'classnames/bind';
import styles from './MonthInfo.module.scss';

const cx = classNames.bind(styles);

function MonthInfo({ data }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('left')}>
        <p className={cx('month')}> {data.month}</p>
        {data.numberTicket === 0 && (
          <p className={cx('lost-tikcet')}>Sold out</p>
        )}
      </div>
      <div className={cx('right')}>
        {data.numberTicket > 0 && (
          <p className={cx('has-ticket')}>{data.numberTicket}</p>
        )}
      </div>
    </div>
  );
}

export default MonthInfo;
