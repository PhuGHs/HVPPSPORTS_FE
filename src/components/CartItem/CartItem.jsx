/* eslint-disable react/prop-types */
import classNames from 'classnames/bind'
import styles from './CartItem.module.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { toVND } from '../../helpers/vndCurrency'

const cx = classNames.bind(styles)

const CartItem = ({ name, src, quantity, price, size }) => {
  const [number, setNumber] = useState(quantity)
  const [totalPrice, setTotalPrice] = useState(price * quantity)
  const increaseNumberByOneHandler = () => {
    setNumber((prevNumber) => prevNumber + 1)
    setTotalPrice(price * (number + 1))
  }

  const decreaseNumberByOneHandler = () => {
    if (number > 1) {
      setNumber((prevNumber) => prevNumber - 1)
      setTotalPrice(price * (number - 1))
    }
  }

  const getActualSize = (size) => {
    if (size === 'sizeL') return 'L'
    if (size === 'sizeM') return 'M'
    if (size === 'sizeXL') return 'XL'
    return 'S'
  }
  return (
    <div className={cx('main-content')}>
      <div className={cx('first-col')}>
        <input type='checkbox' />
      </div>
      <div className={cx('second-col')}>
        <div className={cx('image-container')}>
          <img src={src} alt='product' />
        </div>
        <div className={cx('product-details')}>
          <p>{name}</p>
          <div className={cx('quantity-btn-mb')}>
            <FontAwesomeIcon
              onClick={decreaseNumberByOneHandler}
              icon={faMinus}
              style={{ color: 'gray', cursor: 'pointer' }}
            />
            <p>
              <b>{number}</b>
            </p>
            <FontAwesomeIcon
              onClick={increaseNumberByOneHandler}
              icon={faPlus}
              style={{ color: 'gray', cursor: 'pointer' }}
            />
          </div>
          <span>Size: {getActualSize(size)}</span>
          <p>
            <b>{toVND(price)}</b>
          </p>
        </div>
      </div>
      <div className={cx('third-col')}>
        <div className={cx('quantity-btn')}>
          <FontAwesomeIcon
            onClick={decreaseNumberByOneHandler}
            icon={faMinus}
            style={{ color: 'gray', cursor: 'pointer' }}
          />
          <p>
            <b>{number}</b>
          </p>
          <FontAwesomeIcon
            onClick={increaseNumberByOneHandler}
            icon={faPlus}
            style={{ color: 'gray', cursor: 'pointer' }}
          />
        </div>
      </div>
      <div className={cx('fourth-col')}>
        <p>
          <b style={{ color: 'rgba(254, 44, 85, 1)' }}>{toVND(totalPrice)}</b>
        </p>
      </div>
      <div className={cx('fifth-col')}>
        <FontAwesomeIcon icon={faTrashCan} />
      </div>
    </div>
  )
}

export default CartItem
