import classNames from 'classnames/bind'
import styles from './SignUp.module.scss'
import { Link, redirect } from 'react-router-dom'
import { useInput } from '~/hooks/useInput'
import { Helper } from '~/utils/helper'
import { AuthApi } from '~/api/auth.api'
import { useEffect, useRef } from 'react'

const cx = classNames.bind(styles)
const SignUp = () => {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError
  } = useInput('', Helper.validateEmail)
  const {
    value: usernameValue,
    handleInputChange: handleUsernameChange,
    handleInputBlur: handleUsernameBlur,
    hasError: usernameHasError
  } = useInput('', Helper.validateUsername)
  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError
  } = useInput('', Helper.validatePassword)
  const {
    value: phonenumberValue,
    handleInputChange: handlePhoneNumberChange,
    handleInputBlur: handlePhoneNumberBlur,
    hasError: phoneNumberHasError
  } = useInput('', Helper.validatePhoneNumber)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await AuthApi.signup({
      userName: usernameValue,
      email: emailValue,
      password: passwordValue,
      phone: phonenumberValue
    })
    console.log(response.message)
    if (response.message === 'success') redirect('/auth/signin')
  }

  const usernameRef = useRef()

  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  return (
    <div className={cx('container')}>
      <h2>
        <span className={cx('first-logo')}>HVPP </span>
        <span className={cx('second-logo')}>SPORTS</span>
      </h2>

      <p className={cx('welcome-text')}>Chào mừng quay trở lại!!!</p>
      <h1>Đăng ký</h1>

      <form onSubmit={handleSubmit}>
        <div className={cx('user-input-group')}>
          <div className={cx('user-input')}>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              ref={usernameRef}
              name='username'
              placeholder='Username'
              onChange={handleUsernameChange}
              onBlur={handleUsernameBlur}
              value={usernameValue}
            />
            <div className={cx('error-container')}>
              {usernameHasError && <p className={cx('error-text')}>Username phải từ 6 ký tự trở lên</p>}
            </div>
          </div>
          <div className={cx('user-input')}>
            <label htmlFor='phone'>Số điện thoại</label>
            <input
              type='tel'
              name='phone'
              placeholder='Số điện thoại'
              onChange={handlePhoneNumberChange}
              onBlur={handlePhoneNumberBlur}
              value={phonenumberValue}
            />
            <div className={cx('error-container')}>
              {phoneNumberHasError && <p className={cx('error-text')}>Số điện thoại không hợp lệ</p>}
            </div>
          </div>
        </div>
        <div className={cx('user-input-out')}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Email'
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            value={emailValue}
          />
          <div className={cx('error-container')}>
            {emailHasError && <p className={cx('error-text')}>Email không hợp lệ</p>}
          </div>
        </div>
        <div className={cx('user-input-out')}>
          <label htmlFor='password'>Mật khẩu</label>
          <input
            type='password'
            name='password'
            placeholder='Mật khẩu'
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
            value={passwordValue}
          />
          <div className={cx('error-container')}>
            {passwordHasError && <p className={cx('error-text')}>Mật khẩu phải từ 6 ký tự trở lên</p>}
          </div>
        </div>

        <div className={cx('user-input-out')}>
          <label htmlFor='password'>Xác nhận mật khẩu</label>
          <input
            type='password'
            name='password'
            placeholder='Xác nhận mật khẩu'
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
            value={passwordValue}
          />
          <div className={cx('error-container')}>
            {passwordHasError && <p className={cx('error-text')}>Mật khẩu phải từ 6 ký tự trở lên</p>}
          </div>
        </div>

        <button type='submit' disabled={usernameHasError || passwordHasError || emailHasError || phoneNumberHasError}>
          Đăng ký
        </button>
      </form>

      <p className={cx('signup-suggestion')}>
        Bạn đã có tài khoản ? <Link to='/auth/signin'>Đăng nhập</Link>
      </p>
    </div>
  )
}

export default SignUp
