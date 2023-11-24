import { useState, useRef } from 'react'
import Button from '../../../components/Button/Button'
import styles from './AccountInfo.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
const AccountInfo = () => {
  const [isOpen, setIsOpen] = useState(false)
  const inp = useRef()
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
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
        <div className={cx('change-password-toggle')}>
          <input ref={inp} checked={isOpen} onChange={handleToggle} type='checkbox' id='doimatkhau' />
          <label htmlFor='doimatkhau'>Đổi mật khẩu</label>
        </div>
        {isOpen && (
          <>
            <div className={cx('row-container')}>
              <label htmlFor='old-password'>Mật khẩu cũ: </label>
              <div className={cx('input-container')}>
                <input type='text' id='old-password' />
              </div>
            </div>
            <div className={cx('row-container')}>
              <label htmlFor='new-password'>Mật khẩu mới: </label>
              <div className={cx('input-container')}>
                <input type='text' id='new-password' />
              </div>
            </div>
            <div className={cx('row-container')}>
              <label htmlFor='confirm-password'>Mật khẩu xác nhận: </label>
              <div className={cx('input-container')}>
                <input type='text' id='confirm-password' />
              </div>
            </div>
          </>
        )}
        <div className={cx('row-btn-container')}>
          <Button secondary>Lưu thay đổi</Button>
        </div>
      </div>
    </div>
  )
}

export default AccountInfo
