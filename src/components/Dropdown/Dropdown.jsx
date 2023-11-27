import React from 'react'
import styles from './Dropdown.module.scss'
import classNames from 'classnames/bind'
import Button from '../Button/Button'

const cx = classNames.bind(styles)
const Dropdown = () => {
  return (
    <select name='filters' className={cx('content')}>
      <option value='acsending-price'>Giá tăng dần</option>
      <option value='descending-price'>Giá giảm dần</option>
      <option value='descending-price'>Bán chạy</option>
      <option value='descending-price'>Hàng mới</option>
    </select>
  )
}

export default Dropdown
