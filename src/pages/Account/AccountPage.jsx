import { Outlet } from 'react-router-dom'
import AccountNavigation from '../../components/AccountNavigation/AccountNavigation'
import styles from './AccountPage.module.scss'
import classNames from 'classnames/bind'
import { useState } from 'react'

const cx = classNames.bind(styles)
const AccountPage = () => {
  const [selectedType, setSelectedType] = useState('Thông tin tài khoản')
  const handleSelectType = (type) => {
    setSelectedType(type)
  }
  return (
    <div className={cx('container')}>
      <div className={cx('navbar')}>
        <div className={cx('header')}>
          <h3>TÀI KHOẢN</h3>
        </div>
        <hr />
        <AccountNavigation selectedType={selectedType} onSelectType={handleSelectType}></AccountNavigation>
      </div>
      <div className={cx('side-content')}>
        <Outlet />
      </div>
    </div>
  );
};

export default AccountPage;