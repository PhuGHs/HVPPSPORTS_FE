import classNames from 'classnames/bind'
import styles from './AuthLayout.module.scss'
import { Outlet } from 'react-router-dom';

const cx = classNames.bind(styles)
const AuthLayout = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('content')}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;