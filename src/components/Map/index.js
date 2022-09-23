import classNames from 'classnames/bind';
import styles from './Map.module.scss';

import imgs from '~/assets/img';
const cx = classNames.bind(styles);

function Map() {
  return <img src={imgs.map} alt="map" className={cx('map')} />;
}

export default Map;
