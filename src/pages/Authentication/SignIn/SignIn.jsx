import classNames from 'classnames/bind'
import styles from './SignIn.module.scss'
import { Link } from 'react-router-dom'
import { useInput } from '~/hooks/useInput'
import { Helper } from '~/utils/helper'

const cx = classNames.bind(styles)
const SignIn = () => {
  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError
  } = useInput('', Helper.validatePassword)

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError
  } = useInput('', Helper.validateEmail)

  const handleSubmit = () => {
    if (!passwordHasError && !emailHasError) {
      console.log('submitted')
    }
  }

  return (
    <div className={cx('container')}>
      <h2>
        <span className={cx('first-logo')}>HVPP </span>
        <span className={cx('second-logo')}>SPORTS</span>
      </h2>

      <p className={cx('welcome-text')}>Chào mừng quay trở lại!!!</p>
      <h1>Đăng nhập</h1>

      <form onSubmit={handleSubmit}>
        <div className={cx('user-input')}>
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
        <div className={cx('user-input')}>
          <div className={cx('label-button')}>
            <label htmlFor='password'>Mật khẩu</label>
            <Link to='/auth/forgot-password'>Quên mật khẩu?</Link>
          </div>
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

        <button type='submit'>Đăng nhập</button>
      </form>

      <p className={cx('signup-suggestion')}>
        Bạn không có tài khoản ? <Link to='/auth/signup'>Đăng ký</Link>
      </p>
    </div>
  )
}

export default SignIn
