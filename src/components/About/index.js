import classNames from 'classnames/bind';
import styles from './About.module.scss';

import ContentWrapper from '../ContentWrapper';
import imgs from '~/assets/img';

const cx = classNames.bind(styles);

function About() {
  const title = {
    title: 'THE BAND',
    sub: 'We love music',
  };
  const members = [
    {
      name: 'Name',
      img: imgs.member,
    },
    {
      name: 'Name',
      img: imgs.member,
    },
    {
      name: 'Name',
      img: imgs.member,
    },
  ];
  return (
    <ContentWrapper data={title} light>
      <p className={cx('description')}>
        We have created a fictional band website. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className={cx('container', 'member-wrapper')}>
        <div className={cx('row gx-0')}>
          {members.map((member, index) => (
            <div key={index} className={cx('col-md-4')}>
              <p className={cx('name')}>{member.name}</p>
              <img className={cx('image')} src={imgs.member} alt="" />
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
}

export default About;
