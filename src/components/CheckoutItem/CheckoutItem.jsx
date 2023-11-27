/* eslint-disable react/prop-types */
import { toVND } from '~/helpers/vndCurrency'
import styles from './CheckoutItem.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
const CheckoutItem = ({ item }) => {
  return (
    <div className={cx('container')}>
      <div className={cx('image-container')}>
        <img src={item.src} alt='product' />
      </div>
      <div className={cx('product-details')}>
        <p>{item.name}</p>
        <p className={cx('single')}>{toVND(item.price)}</p>
        <p>Số lượng: {item.quantity}</p>
        <p className={cx('multiple')}>{toVND(item.price * item.quantity)}</p>
      </div>
    </div>
  )
}

export default CheckoutItem
