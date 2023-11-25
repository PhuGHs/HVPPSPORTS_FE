/* eslint-disable react/prop-types */
import styles from './OffCanvas.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faClose } from '@fortawesome/free-solid-svg-icons'
import { categories } from '../../pages/Home/HomePage'

const cx = classNames.bind(styles)
const Offcanvas = ({ handleClose }) => {
  return (
    <div className={cx('container')}>
      <div className={cx('menu')}>
        <div className={cx('brand-container')}>
          <h2>
            <span className={cx('first-logo')}>HVPP </span>
            <span className={cx('second-logo')}>SPORTS</span>
          </h2>
        </div>
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
      </div>
      <div className={cx('close-btn')} onClick={handleClose}>
        <FontAwesomeIcon icon={faClose} />
      </div>
    </div>
  )
}

export default Offcanvas
