/* eslint-disable react/prop-types */
import classNames from 'classnames/bind'
import styles from './CartItem.module.scss'
import { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { toVND } from '../../helpers/vndCurrency'
import { CartContext } from '~/store/cart-context'
import { CartApi } from '~/api/cart.api'
import { UserContext } from '~/store/user-context'
import { useNavigate } from 'react-router-dom'
import { Helper } from '~/utils/helper'

const cx = classNames.bind(styles)

const CartItem = ({ id, name, src, quantity, price, size, handleChecked, item, isSelected }) => {
  const [number, setNumber] = useState(quantity)
  const { user } = useContext(UserContext)
  const { removeItem } = useContext(CartContext)
  const [totalPrice, setTotalPrice] = useState(price * quantity)
  const navigate = useNavigate()
  const increaseNumberByOneHandler = async () => {
    let shoudUpdateOnUI = true
    try {
      await CartApi.increase(user.id, id, size)
    } catch (error) {
      shoudUpdateOnUI = false
      console.log('come in error')
      console.error(error)
    } finally {
      console.log('come in finally')
      if (shoudUpdateOnUI) {
        console.log('come in should update if statement')
        setNumber((prevNumber) => prevNumber + 1)
        setTotalPrice(price * (number + 1))
      }
    }
  }

  const decreaseNumberByOneHandler = async () => {
    try {
      if (number > 1) {
        await CartApi.decrease(user.id, id, size)
      }
    } catch (error) {
      console.error(error)
    } finally {
      if (number > 1) {
        setNumber((prevNumber) => prevNumber - 1)
        setTotalPrice(price * (number - 1))
      }
    }
  }

  const navigateToProductDetails = () => {
    navigate(`/products/${id}`)
  }

  return (
    <div className={cx('main-content')}>
      <div className={cx('first-col')}>
        <input type='checkbox' checked={isSelected} onChange={(event) => handleChecked(item, event.target.checked)} />
      </div>
      <div className={cx('second-col')}>
        <div className={cx('image-container')} style={{ cursor: 'pointer' }} onClick={navigateToProductDetails}>
          <img src={src} alt='product' />
        </div>
        <div className={cx('product-details')}>
          <p onClick={navigateToProductDetails}>{name}</p>
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
          <span>Size: {Helper.getActualSize(size)}</span>
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
      <div className={cx('fifth-col')} onClick={() => removeItem(id, size)}>
        <FontAwesomeIcon icon={faTrashCan} />
      </div>
    </div>
  )
}

export default CartItem
