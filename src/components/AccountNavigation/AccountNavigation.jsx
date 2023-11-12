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

const AccountNavigation = ({ selectedType, onSelectType, children, items }) => {
  return (
    <>
      <menu className={cx('tabs')}>
        {items.map((item, index) => (
          <NavItem
            key={index}
            onSelect={() => onSelectType(item.name)}
            isSelected={selectedType === item.name}
            link={item.link}
          >
            {item.name}
          </NavItem>
        ))}
      </menu>
      <div>{children}</div>
    </>
  )
}

export default AccountNavigation
