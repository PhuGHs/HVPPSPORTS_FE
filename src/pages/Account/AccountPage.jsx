import { Outlet } from 'react-router-dom'
import AccountNavigation from '../../components/AccountNavigation/AccountNavigation'
import styles from './AccountPage.module.scss'
import classNames from 'classnames/bind'
import { useState } from 'react'

const cx = classNames.bind(styles)
const items = [
  { name: 'Thông tin tài khoản', link: 'info' },
  { name: 'Sổ địa chỉ', link: 'address' },
  { name: 'Ví voucher', link: 'voucher-wallet' },
  { name: 'Đơn hàng của tôi', link: 'my-orders' },
  { name: 'Nhận xét của tôi', link: 'my-reviews' }
]
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
        <AccountNavigation
          selectedType={selectedType}
          onSelectType={handleSelectType}
          items={items}
        ></AccountNavigation>
      </div>
      <div className={cx('side-content')}>
        <Outlet />
      </div>
    </div>
  )
}

export default AccountPage
