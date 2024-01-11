import { useState, useRef, useContext } from 'react'
import Button from '../../../components/Button/Button'
import styles from './AccountInfo.module.scss'
import classNames from 'classnames/bind'
import { UserContext } from '~/store/user-context'
import { useInput } from '~/hooks/useInput'
import { Helper } from '~/utils/helper'
import { CustomerApi } from '~/api/account.api'
import NotificationContext from '~/store/notification-context'
import { setUserToLS } from '~/utils/auth'
import { useEffect } from 'react'

const cx = classNames.bind(styles)
const AccountInfo = () => {
  const [isOpen, setIsOpen] = useState(false)
  const notificationCtx = useContext(NotificationContext)
  const { user } = useContext(UserContext)
  const inp = useRef()
  const firstRef = useRef()
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen && firstRef.current) {
      firstRef.current.focus()
    }
  }, [isOpen])

  const {
    value: usernameValue,
    handleInputChange: handleUsernameChange,
    handleInputBlur: handleUsernameBlur,
    hasError: usernameHasError
  } = useInput(user.name, Helper.validateUsername)

  const {
    value: phoneNumber,
    handleInputChange: handlePhoneNumberChange,
    handleInputBlur: handlePhoneNumberBlur,
    hasError: phoneNumberHasError
  } = useInput(user.phone, Helper.validatePhoneNumber)

  const { value: sex, handleInputChange: handleSexChange } = useInput(user.male ? 'male' : 'female', () => true)

  const {
    value: newpasswordValue,
    handleInputChange: handleNewPasswordValueChange,
    handleInputBlur: handleNewPasswordValueBlur,
    hasError: newpasswordValueHasError
  } = useInput('', Helper.validatePassword)

  const {
    value: oldPassword,
    handleInputChange: handleOldPasswordValueChange,
    handleInputBlur: handleOldPasswordValueBlur,
    hasError: oldPasswordValueHasError
  } = useInput('', Helper.validatePassword)

  const {
    value: confirmedPassword,
    handleInputChange: handleConfirmedPasswordValueChange,
    handleInputBlur: handleConfirmedPasswordValueBlur,
    hasError: confirmedPasswordValueHasError
  } = useInput('', Helper.validatePassword)

  const {
    value: address,
    handleInputChange: handleAddressValueChange,
    handleInputBlur: handleAddressValueBlur
  } = useInput(user.address, Helper.validateAddress)

  const {
    value: datebirth,
    handleInputChange: handleDateBirthChange,
    handleInputBlur: handleDateBirthBlur
  } = useInput(user.datebirth, Helper.validateDate)

  const handleSubmit = async (event) => {
    event.preventDefault()
    let body = {}
    if (isOpen) {
      if (confirmedPasswordValueHasError || newpasswordValueHasError || oldPasswordValueHasError) {
        notificationCtx.error('Có lỗi xảy ra! Hãy kiểm tra lại!')
        return
      }
      body = {
        email: user.email,
        oldPassword: oldPassword,
        newPassword: newpasswordValue
      }
      if (confirmedPassword !== newpasswordValue) {
        notificationCtx.error('Mật khẩu mới và Mật khẩu xác nhận không khớp với nhau')
        return
      }
      try {
        await CustomerApi.updatePassword(body)
        notificationCtx.success('Đổi mật khẩu thành công')
      } catch (error) {
        notificationCtx.error(`Có lỗi xảy ra: ${error.response.data.message}`)
      }
    } else {
      body = {
        id: user.id,
        name: usernameValue,
        phone: phoneNumber,
        address: address,
        datebirth: datebirth,
        avatar: ''
      }
      try {
        await CustomerApi.updateAccountDetails(body)
        setUserToLS({
          address: address,
          avatar: user.avatar,
          datebirth: datebirth,
          email: user.email,
          id: user.id,
          male: sex === 'male',
          name: usernameValue,
          phone: phoneNumber
        })
        notificationCtx.success('Cập nhật thông tin thành công')
      } catch (error) {
        notificationCtx.error(`Có lỗi xảy ra: ${error.message}`)
      }
    }
  }

  return (
    <div className={cx('container')}>
      <div className={cx('inner-container')}>
        <p>Thông tin tài khoản</p>
        <div className={cx('row-container')}>
          <label htmlFor='username'>Username: </label>
          <div className={cx('input-container')}>
            <input
              type='text'
              id='username'
              value={usernameValue}
              onChange={handleUsernameChange}
              onBlur={handleUsernameBlur}
              style={{ borderColor: usernameHasError ? 'red' : '#213555' }}
            />
          </div>
        </div>
        <div className={cx('row-container')}>
          <label htmlFor='phonenumber'>Số điện thoại: </label>
          <div className={cx('input-container')}>
            <input
              type='tel'
              id='phonenumber'
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              onBlur={handlePhoneNumberBlur}
              style={{ borderColor: phoneNumberHasError ? 'red' : '#213555' }}
            />
          </div>
        </div>
        <div className={cx('row-container')}>
          <label htmlFor='email'>Địa chỉ: </label>
          <div className={cx('input-container')}>
            <input
              type='text'
              id='address'
              value={address}
              onChange={handleAddressValueChange}
              onBlur={handleAddressValueBlur}
            />
          </div>
        </div>
        <div className={cx('row-container')}>
          <label htmlFor='email'>Email: </label>
          <div className={cx('input-container')}>
            <input type='email' id='email' readOnly value={user.email} />
          </div>
        </div>
        <div className={cx('row-container')}>
          <label htmlFor='email'>Ngày sinh: </label>
          <div className={cx('input-container')}>
            <input
              type='date'
              id='datebirth'
              value={datebirth ? new Date(datebirth).toISOString().split('T')[0] : ''}
              onChange={handleDateBirthChange}
              onBlur={handleDateBirthBlur}
            />
          </div>
        </div>
        <div className={cx('row-container')}>
          <label htmlFor='email'>Giới tính: </label>
          <div className={cx('rad-btns')}>
            <div className={cx('rad-btn')}>
              <input
                type='radio'
                id='male'
                name='sex'
                value={'male'}
                checked={sex === 'male'}
                onChange={handleSexChange}
              />
              <label htmlFor='male'>Nam</label>
            </div>
            <div className={cx('rad-btn')}>
              <input
                type='radio'
                id='female'
                name='sex'
                value={'female'}
                checked={sex === 'female'}
                onChange={handleSexChange}
              />
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
                <input
                  type='text'
                  id='old-password'
                  value={oldPassword}
                  ref={firstRef}
                  onChange={handleOldPasswordValueChange}
                  onBlur={handleOldPasswordValueBlur}
                  style={{ borderColor: oldPasswordValueHasError ? 'red' : '#213555' }}
                />
              </div>
            </div>
            <div className={cx('row-container')}>
              <label htmlFor='new-password'>Mật khẩu mới: </label>
              <div className={cx('input-container')}>
                <input
                  type='text'
                  id='new-password'
                  value={newpasswordValue}
                  onChange={handleNewPasswordValueChange}
                  onBlur={handleNewPasswordValueBlur}
                  style={{ borderColor: newpasswordValueHasError ? 'red' : '#213555' }}
                />
              </div>
            </div>
            <div className={cx('row-container')}>
              <label htmlFor='confirm-password'>Mật khẩu xác nhận: </label>
              <div className={cx('input-container')}>
                <input
                  type='text'
                  id='confirm-password'
                  onChange={handleConfirmedPasswordValueChange}
                  onBlur={handleConfirmedPasswordValueBlur}
                  value={confirmedPassword}
                  style={{ borderColor: confirmedPasswordValueHasError ? 'red' : '#213555' }}
                />
              </div>
            </div>
          </>
        )}
        <div className={cx('row-btn-container')}>
          <Button secondary onClick={handleSubmit}>
            Lưu thay đổi
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AccountInfo
