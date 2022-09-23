import classNames from 'classnames/bind';
import styles from './BuyBtn.module.scss';

const cx = classNames.bind(styles);

function BuyBtn() {
  const inputForms = [
    {
      icon: <i className={cx('fas', 'fa-solid', 'fa-cart-shopping')}></i>,
      title: 'Tickets, $15 per person',
      placeHolder: 'How many?',
    },
    {
      icon: <i className={cx('fa', 'fa-solid', 'fa-user')}></i>,
      title: 'Send to',
      placeHolder: 'Enter email',
    },
  ];
  return (
    <div className={cx('wrapper')}>
      <button
        type="button"
        className={cx('buy-btn')}
        data-bs-toggle="modal"
        data-bs-target="#buyTicketsModal"
      >
        Buy Tickets
      </button>
      <div className={cx('modal', 'fade')} id="buyTicketsModal">
        <div className={cx('modal-dialog')}>
          <div className={cx('modal-content', 'modal-wrapper')}>
            <div className={cx('modal-inner')}>
              <div className={cx('modal-header')}>
                <i
                  className={cx('fa', 'fa-solid', 'fa-suitcase', 'icon')}
                  aria-hidden="false"
                ></i>
                <h4 className={cx('modal-title')}>Tickets</h4>
                <button
                  type="button"
                  className={cx('btn-close', 'modal-close')}
                  data-bs-dismiss="modal"
                ></button>
              </div>

              <div>
                <div className={cx('modal-body')}>
                  {inputForms.map((form, index) => (
                    <div key={index} className={cx('input-form')}>
                      <div className={cx('input-header')}>
                        {form.icon}
                        <p className={cx('input-title')}>{form.title}</p>
                      </div>
                      <input
                        type="number"
                        placeholder={form.placeHolder}
                        className={cx('input-box')}
                        required
                      />
                    </div>
                  ))}
                  <button className={cx('modal-submit')} type="submit">
                    PAY
                    <i className={cx('fa', 'fa-solid', 'fa-check')}></i>
                  </button>
                </div>

                <div className={cx('modal-footer', 'modal-footer-wrapper')}>
                  <button
                    type="button"
                    className={cx('btn btn-danger', 'modal-footer-close')}
                    data-bs-dismiss="modal"
                  >
                    Close
                    <i
                      className={cx(
                        'fa',
                        'fa-solid',
                        'fa-xmark',
                        'modal-footer-close-icon',
                      )}
                    ></i>
                  </button>
                  <p className={cx('modal-footer-help')}>
                    Need{' '}
                    <a className={cx('modal-help-link')} href="/">
                      help?
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyBtn;
