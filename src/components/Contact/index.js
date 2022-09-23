import classNames from 'classnames/bind';
import styles from './Contact.module.scss';

import ContentWrapper from '../ContentWrapper';
import ContactItem from './components/ContactItem';
import ContactInput from './components/ContactInput';
const cx = classNames.bind(styles);

function Contact() {
  const title = {
    title: 'CONTACT',
    sub: 'Fan? Drop a note!',
  };
  const contactItems = [
    {
      icon: <i className={cx('fa', 'fa-solid', 'fa-location-dot')}></i>,
      contact: 'Chicago, US',
    },
    {
      icon: <i className={cx('fa', 'fa-solid', 'fa-phone')}></i>,
      contact: 'Phone: +00 151515',
    },
    {
      icon: <i className={cx('fa', 'fa-solid', 'fa-envelope')}></i>,
      contact: 'Email: mail@mail.com',
    },
  ];

  return (
    <ContentWrapper data={title} light>
      <div>
        <div className={cx('container', 'wrapper')}>
          <div className={cx('row')}>
            <div className={cx('col-md-6')}>
              {contactItems.map((item, index) => (
                <ContactItem key={index} data={item} />
              ))}
            </div>
            <div className={cx('col-md-6')}>
              <div className={cx('row')}>
                <div className={cx('col-md-6')}>
                  <ContactInput holder="Name" type="text" />
                </div>
                <div className={cx('col-md-6')}>
                  <ContactInput holder="Email" type="email" />
                </div>
              </div>
              <div className={cx('row')}>
                <div className={cx('col', 'gy-3')}>
                  <ContactInput holder="Message" type="text" />
                </div>
              </div>
              <button type="submit" className={cx('send-btn')}>
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default Contact;
