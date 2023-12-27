import styles from './ForgotPassword.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)
const ForgotPassword = () => {
  return (
    <div className={cx('container')}>
      <h2>
        <span className={cx('first-logo')}>HVPP </span>
        <span className={cx('second-logo')}>SPORTS</span>
      </h2>

      <p className={cx('welcome-text')}>Hãy nhập email của bạn để chúng tôi giúp bạn lấy lại mật khẩu!</p>

      <form>
        <input type='email' required name='email' placeholder='Email' />

        <button>Gửi yêu cầu đổi mật khẩu</button>
      </form>

      <p>
        Bạn muốn đăng nhập? <Link to='/auth/signin'>Đăng nhập</Link>
      </p>
    </div>
  )
}

export default ForgotPassword
