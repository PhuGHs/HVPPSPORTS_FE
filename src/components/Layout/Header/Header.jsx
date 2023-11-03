import { useState } from 'react'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faClose, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

//https://react-bootstrap.netlify.app/docs/components/offcanvas, use this for dropdown button, when the screen is getting smaller.

function Header() {
  const [isClicked, setIsClicked] = useState(false)
  const isLargeDevice = useMediaQuery('only screen and (min-width : 1025px)')
  const isMediumDevice = useMediaQuery('only screen and (min-width : 769px) and (max-width : 1024px)')
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)')
  const handleClick = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked)
  }

  return (
    <header className={cx('navbar-cus')}>
      <div className={cx('logo')}>
        <Link href='/'>
          <h2>
            <span className={cx('first-logo')}>HVPP </span>
            <span className={cx('second-logo')}>SPORTS</span>
          </h2>
        </Link>
      </div>
      {isLargeDevice && (
        <nav className={cx('navitem-cus')}>
          <ul className={cx('first-list')}>
            <a href='/#new-product'>HÀNG MỚI VỀ</a>
            <a href='/#recommendation'>HÀNG BÁN CHẠY</a>
          </ul>
          <div className={cx('end-items')}>
            <div className={cx('search-bar')}>
              <FontAwesomeIcon icon={faSearch} />
              <input type='text' value='Manchester City' />
            </div>
            <ul className={cx('second-list')}>
              <li>
                <Link to='/cart'>
                  <div className={cx('header-btn')}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    <p>Giỏ hàng</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to='/account'>
                  <div className={cx('header-btn')}>
                    <FontAwesomeIcon icon={faUser} />
                    <p>Tài khoản</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
      {isMediumDevice && (
        <nav className={cx('navitem-cus')}>
          <ul className={cx('first-list')}>
            <Link to='/'>HÀNG MỚI VỀ</Link>
            <Link to='/'>HÀNG BÁN CHẠY</Link>
          </ul>
        </nav>
      )}
      {(isSmallDevice || isMediumDevice) && (
        <div>
          <Link onClick={handleClick}>
            <FontAwesomeIcon icon={isClicked ? faClose : faBars} />
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header
