import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

import imgs from '~/assets/img';

const cx = classNames.bind(styles);

function Slider() {
  const cities = [
    {
      title: 'Los Angerles',
      description: 'We had the best time playing at Venice Beach!',
      img: imgs.losAgerles,
    },
    {
      title: 'New York',
      description: 'The atmosphere in New York is lorem ipsum.',
      img: imgs.newyork,
    },
    {
      title: 'Chicago',
      description: "Thank you, Chicago - A night we won't forget.",
      img: imgs.chicago,
    },
  ];
  return (
    <div
      id="slider"
      className={cx('carousel', 'slide')}
      data-bs-ride="carousel"
    >
      <div className={cx('carousel-inner')}>
        {cities.map((city, index) => {
          return (
            <div className={cx('carousel-item', index === 0 && 'active')}>
              <img key={index} src={city.img} class="d-block w-100" alt="..." />
              <div className={cx('carousel-caption')}>
                <h2 className={cx('title')}>{city.title}</h2>
                <p className={cx('description')}>{city.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
