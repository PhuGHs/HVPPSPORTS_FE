import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styles from './AccountPage.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
const AccountPage = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('navbar')}>
        <div className={cx('header')}>
          <h3>TÀI KHOẢN</h3>
        </div>
        <hr />
        <div className={cx('nav-item-active')}>
          <Link to='info'>
            <p>Thông tin tài khoản</p>
          </Link>
        </div>
        <div className={cx('nav-item')}>
          <Link to='address'>
            <p>Sổ địa chỉ</p>
          </Link>
        </div>
        <div className={cx('nav-item')}>
          <Link to='voucher-wallet'>
            <p>Ví voucher</p>
          </Link>
        </div>
        <div className={cx('nav-item')}>
          <Link to='my-orders'>
            <p>Đơn hàng của tôi</p>
          </Link>
        </div>
        <div className={cx('nav-item')}>
          <Link to='my-reviews'>
            <p>Nhận xét của tôi</p>
          </Link>
        </div>
      </div>
      <div className={cx('side-content')}>
        <Outlet />
      </div>
    </div>
  );
};

export default AccountPage;