import Button from '../../../components/Button/Button'
import styles from './AccountInfo.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)
const AccountInfo = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('inner-container')}>
        <p>Thông tin tài khoản</p>
        <div className={cx('row-container')}>
          <label htmlFor='username'>Họ và tên: </label>
          <div className={cx('input-container')}>
            <input type='text' id='username' />
          </div>
        </div>
        <div className={cx('row-container')}>
          <label htmlFor='phonenumber'>Số điện thoại: </label>
          <div className={cx('input-container')}>
            <input type='tel' id='phonenumber' />
          </div>
        </div>
        <div className={cx('row-container')}>
          <label htmlFor='email'>Email: </label>
          <div className={cx('input-container')}>
            <input type='email' id='email' />
          </div>
        </div>
        <div className={cx('row-container')}>
          <label htmlFor='email'>Giới tính: </label>
          <div className={cx('rad-btns')}>
            <div className={cx('rad-btn')}>
              <input type='radio' id='male' name='sex' checked />
              <label htmlFor='male'>Nam</label>
            </div>
            <div className={cx('rad-btn')}>
              <input type='radio' id='female' name='sex' />
              <label htmlFor='female'>Nữ</label>
            </div>
          </div>
        </div>
        <div className={cx('row-btn-container')}>
          <Button secondary>Lưu thay đổi</Button>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;