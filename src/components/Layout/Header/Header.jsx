import { useState } from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import Offcanvas from '../../../components/OffCanvas/Offcanvas'

const cx = classNames.bind(styles)

//https://react-bootstrap.netlify.app/docs/components/offcanvas, use this for dropdown button, when the screen is getting smaller.

function Header() {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked)
  }

  return (
    <>
      <header className={cx('navbar-cus')}>
        <div className={cx('logo')}>
          <Link href='/'>
            <h2>
              <span className={cx('first-logo')}>HVPP </span>
              <span className={cx('second-logo')}>SPORTS</span>
            </h2>
          </Link>
        </div>
        <nav className={cx('navitem-cus')}>
          <ul className={cx('first-list')}>
            <a href='/#new-product'>HÀNG MỚI VỀ</a>
            <a href='/#recommendation'>HÀNG BÁN CHẠY</a>
          </ul>
          <div className={cx('end-items')}>
            <div className={cx('search-bar')}>
              <FontAwesomeIcon icon={faSearch} className={cx('icon')} />
              <input type='text' value='Manchester City' />
            </div>
            <ul className={cx('second-list')}>
              <li>
                <div className={cx('header-btn-mb')}>
                  <FontAwesomeIcon icon={faSearch} className={cx('icon')} />
                </div>
              </li>
              <li>
                <Link to='/cart'>
                  <div className={cx('header-btn')}>
                    <FontAwesomeIcon icon={faCartShopping} className={cx('icon')} />
                    <p>Giỏ hàng</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to='/account'>
                  <div className={cx('header-btn')}>
                    <FontAwesomeIcon icon={faUser} className={cx('icon')} />
                    <p>Tài khoản</p>
                  </div>
                </Link>
              </li>
              <li>
                <div className={cx('header-btn-mb')} onClick={handleClick}>
                  <FontAwesomeIcon icon={faBars} className={cx('icon')} />
                </div>
              </li>
              {isClicked && <Offcanvas handleClose={handleClick} />}
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
