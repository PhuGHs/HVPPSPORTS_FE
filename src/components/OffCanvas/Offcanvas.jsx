/* eslint-disable react/prop-types */
import styles from './OffCanvas.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faClose } from '@fortawesome/free-solid-svg-icons'
import { categories } from '../../pages/Home/HomePage'
import { useState } from 'react'
import facebook from '../../assets/images/facebook.svg'
import zalo from '../../assets/images/zalo.svg'
import messenger from '../../assets/images/messenger.svg'

const cx = classNames.bind(styles)
const Offcanvas = ({ handleClose }) => {
  const [closing, setClosing] = useState(false)
  const handleClosing = () => {
    setClosing(true)
    setTimeout(() => {
      handleClose()
      setClosing(false)
    }, 500)
  }
  return (
    <div className={cx('container')}>
      <div className={cx('menu', { closing })}>
        <div className={cx('brand-container')}>
          <h2>
            <span className={cx('first-logo')}>HVPP </span>
            <span className={cx('second-logo')}>SPORTS</span>
          </h2>
        </div>
        <div className={cx('links-footer')}>
          <div className={cx('links')}>
            {categories.map((item, index) => {
              return (
                <div key={index} className={cx('link-item')}>
                  <Link to={item.route}>{item.name}</Link>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
              )
            })}
          </div>
          <div className={cx('footer')}>
            <Link>About us</Link>
            <Link>Helps</Link>
            <Link>Term and Conditions</Link>
            <div className={cx('social')}>
              <img src={facebook} alt='facebook.svg' />
              <img src={zalo} alt='zalo.svg' />
              <img src={messenger} alt='messenger.svg' />
            </div>
            <p>© HVPP Corporation</p>
          </div>
        </div>
      </div>
      <div className={cx('close-btn')} onClick={handleClosing}>
        <FontAwesomeIcon icon={faClose} />
      </div>
    </div>
  )
}

export default Offcanvas
