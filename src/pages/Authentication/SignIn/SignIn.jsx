import classNames from 'classnames/bind'
import styles from './SignIn.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useInput } from '~/hooks/useInput'
import { Helper } from '~/utils/helper'
import { AuthApi } from '~/api/auth.api'
import { useContext, useEffect } from 'react'
import { useRef } from 'react'
import { setTokenToLS, setUserToLS } from '~/utils/auth'
import NotificationContext from '~/store/notification-context'
import { UserContext } from '~/store/user-context'

const cx = classNames.bind(styles)
const SignIn = () => {
  const notificationCtx = useContext(NotificationContext)
  const { setUser } = useContext(UserContext)
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

  const emailRef = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    emailRef.current.focus()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await AuthApi.signin({
        email: emailValue,
        password: passwordValue
      })

      console.log(response)

      if (response.status === 200) {
        setTokenToLS('Bearer ' + response.data.data.access_token)
        const customer = response.data.data.customer
        customer.email = response.data.data.email
        setUser(customer)
        setUserToLS(customer)
        navigate('/')
      }
    } catch (error) {
      notificationCtx.error('Tài khoản hoặc mật khẩu không chính xác!')
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
            ref={emailRef}
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

        <button type='submit' disabled={emailHasError || passwordHasError}>
          Đăng nhập
        </button>
      </form>

      <p className={cx('signup-suggestion')}>
        Bạn không có tài khoản ? <Link to='/auth/signup'>Đăng ký</Link>
      </p>
    </div>
  )
}

export default SignIn
