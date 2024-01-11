import { useContext, useState } from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faRightFromBracket, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import Offcanvas from '../../../components/OffCanvas/Offcanvas'
import { Badge } from '@mui/material'
import { CartContext } from '~/store/cart-context'
import { AuthApi } from '~/api/auth.api'
import { removeTokenFromLS, removeUserFromLS } from '~/utils/auth'

const cx = classNames.bind(styles)

function Header() {
  const { items } = useContext(CartContext)
  const [isClicked, setIsClicked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const handleClick = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleLogout = async () => {
    try {
      await AuthApi.logout()
      removeTokenFromLS()
      removeUserFromLS()
    } catch (error) {
      console.error(error)
    }
  }

  //https://www.robinwieruch.de/react-dropdown/

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
            {/* <div className={cx('search-bar')}>
              <FontAwesomeIcon icon={faSearch} className={cx('icon')} />
              <input type='text' value='Manchester City' />
            </div> */}
            <ul className={cx('second-list')}>
              {/* <li>
                <div className={cx('header-btn-mb')}>
                  <FontAwesomeIcon icon={faSearch} className={cx('icon')} />
                </div>
              </li> */}
              <li>
                <Link to='/cart'>
                  <div className={cx('header-btn')}>
                    <Badge badgeContent={items.length} color='error' className={cx('cart-badge')} max={9}>
                      <FontAwesomeIcon icon={faCartShopping} className={cx('icon')} />
                    </Badge>
                  </div>
                </Link>
              </li>
              <li>
                <Link to='/account' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className={cx('header-btn')}>
                    <FontAwesomeIcon icon={faUser} className={cx('icon')} />
                  </div>
                </Link>
              </li>
              <li>
                <Link to='/' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleLogout}>
                  <div className={cx('header-btn')}>
                    <FontAwesomeIcon icon={faRightFromBracket} className={cx('icon')} />
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
