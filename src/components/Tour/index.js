import classNames from 'classnames/bind';
import styles from './Tour.module.scss';

import imgs from '~/assets/img';
import ContentWrapper from '../ContentWrapper';
import MonthInfo from './components/MonthInfo';
import BuyBtn from './components/BuyBtn';

const cx = classNames.bind(styles);

function Tour() {
  const title = {
    title: 'TOUR DATES',
    sub: 'Remember to book your tickets!',
  };
  const monthInfos = [
    {
      month: 'September',
      numberTicket: 0,
    },
    {
      month: 'October',
      numberTicket: 0,
    },
    {
      month: 'November',
      numberTicket: 3,
    },
  ];

  const buyTicketFromCities = [
    {
      name: 'New York',
      time: 'Fri 27 Nov 2016',
      description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.',
      picture: imgs.newyorkCity,
    },
    {
      name: 'Paris',
      time: 'Sat 28 Nov 2016',
      description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.',
      picture: imgs.parisCity,
    },
    {
      name: 'New York',
      time: 'Sun 29 Nov 2016',
      description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.',
      picture: imgs.sanfranCity,
    },
  ];
  return (
    <ContentWrapper data={title} dark>
      <br />
      <div className={cx('time-wrapper')}>
        {monthInfos.map((info, index) => (
          <MonthInfo key={index} data={info} />
        ))}
      </div>

      <div className={cx('container', 'buy-wrapper')}>
        <div className={cx('row')}>
          {buyTicketFromCities.map((city, index) => (
            <div key={index} className={cx('col-md-4')}>
              <div className={cx('city-wrapper')}>
                <img
                  className={cx('city-img')}
                  src={city.picture}
                  alt="new york"
                />
                <div className={cx('city-text')}>
                  <h3 className={cx('city-name')}>{city.name}</h3>
                  <p className={cx('city-time')}>{city.time}</p>
                  <p className={cx('city-description')}>{city.description}</p>
                  <BuyBtn />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
}

export default Tour;
