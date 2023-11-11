/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import styles from './AccountNavigation.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
const NavItem = ({ isSelected, onSelect, children, link }) => {
  return (
    <li className={isSelected ? cx('nav-item-active') : cx('nav-item')} onClick={onSelect}>
      <Link to={link}>
        <p>{children}</p>
      </Link>
    </li>
  )
}

const AccountNavigation = ({ selectedType, onSelectType, children }) => {
  return (
    <>
      <menu className={cx('tabs')}>
        <NavItem
          isSelected={selectedType === 'Thông tin tài khoản'}
          onSelect={() => onSelectType('Thông tin tài khoản')}
          link='info'
        >
          Thông tin tài khoản
        </NavItem>
        <NavItem isSelected={selectedType === 'Sổ địa chỉ'} onSelect={() => onSelectType('Sổ địa chỉ')} link='address'>
          Sổ địa chỉ
        </NavItem>
        <NavItem
          isSelected={selectedType === 'Ví voucher'}
          onSelect={() => onSelectType('Ví voucher')}
          link='voucher-wallet'
        >
          Ví voucher
        </NavItem>
        <NavItem
          isSelected={selectedType === 'Đơn hàng của tôi'}
          onSelect={() => onSelectType('Đơn hàng của tôi')}
          link='my-orders'
        >
          Đơn hàng của tôi
        </NavItem>
        <NavItem
          isSelected={selectedType === 'Nhận xét của tôi'}
          onSelect={() => onSelectType('Nhận xét của tôi')}
          link='my-reviews'
        >
          Nhận xét của tôi
        </NavItem>
      </menu>
      <div>{children}</div>
    </>
  )
}

export default AccountNavigation
