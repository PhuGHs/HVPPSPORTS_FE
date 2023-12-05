import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faLock, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import facebook from '../../../assets/images/facebook.svg'
import zalo from '../../../assets/images/zalo.svg'
import messenger from '../../../assets/images/messenger.svg'

const cx = classNames.bind(styles)
const Footer = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('about')}>
        <h4>GIỚI THIỆU</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis metus ut massa tincidunt faucibus.
          Vestibulum mauris purus, eleifend sit amet risus sit amet, finibus ornare erat.
        </p>
        <div className={cx('payment')}>
          <div className={cx('payment-item')}>
            <div className={cx('momo')}></div>
          </div>
          <div className={cx('payment-item')}>
            <div className={cx('atm')}></div>
          </div>
          <div className={cx('payment-item')}>
            <div className={cx('cash')}></div>
          </div>
        </div>
        <div className={cx('security')}>
          <FontAwesomeIcon icon={faLock} />
          <p>Secure Online Payment</p>
        </div>
      </div>
      <div className={cx('categories')}>
        <h4>DANH MỤC</h4>
        <ul>
          <li>
            <Link to=''>Premier League</Link>
          </li>
          <li>
            <Link to=''>Bundesliga</Link>
          </li>
          <li>
            <Link to=''>Ligue 1</Link>
          </li>
          <li>
            <Link to=''>Laliga</Link>
          </li>
          <li>
            <Link to=''>Serie A</Link>
          </li>
          <li>
            <Link to=''>International</Link>
          </li>
        </ul>
      </div>
      <div className={cx('information')}>
        <h4>CHÍNH SÁCH VÀ ĐIỀU KHOẢN</h4>
        <ul>
          <li>
            <Link>Điều khoản và điều kiện</Link>
          </li>
          <li>
            <Link>Chính sách đổi trả</Link>
          </li>
          <li>
            <Link>Chính sách vận chuyển</Link>
          </li>
          <li>
            <Link>Chính sách bảo mật</Link>
          </li>
        </ul>
      </div>
      <div className={cx('contact')}>
        <h4>LIÊN HỆ CHÚNG TÔI</h4>
        <div>
          <div className={cx('address')}>
            <p>
              <span>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              Đường Hàn Thuyên, khu phố 6 P, Thủ Đức, Thành phố Hồ Chí Minh
            </p>
          </div>
          <div className={cx('phone-email')}>
            <div className={cx('item')}>
              <div className={cx('left-item')}>
                <FontAwesomeIcon icon={faPhoneSquare} />
                <p>Điện thoại: </p>
              </div>
              <p>0123 321 008</p>
            </div>
            <div className={cx('item')}>
              <div className={cx('left-item')}>
                <FontAwesomeIcon icon={faEnvelope} />
                <p>Email: </p>
              </div>
              <p>hvppsports@hvpp.com</p>
            </div>
          </div>
          <div className={cx('social')}>
              <img src={facebook} alt='facebook.svg' />
              <img src={zalo} alt='zalo.svg' />
              <img src={messenger} alt='messenger.svg' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
