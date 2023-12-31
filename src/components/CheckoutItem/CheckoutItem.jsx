/* eslint-disable react/prop-types */
import { toVND } from '~/helpers/vndCurrency'
import styles from './CheckoutItem.module.scss'
import classNames from 'classnames/bind'

const getActualSize = (size) => {
  if (size === 'SizeL') return 'L'
  if (size === 'SizeM') return 'M'
  if (size === 'SizeXL') return 'XL'
  return 'S'
}

const cx = classNames.bind(styles)
const CheckoutItem = ({ item }) => {
  return (
    <div className={cx('container')}>
      <div className={cx('image-container')}>
        <img src={item.product.urlThumb} alt='product' />
      </div>
      <div className={cx('product-details')}>
        <p>{item.product.name}</p>
        <p className={cx('single')}>{toVND(item.product.price)}</p>
        <p>Size: {getActualSize(item.size)}</p>
        <p>Số lượng: {item.quantity}</p>
        <p className={cx('multiple')}>{toVND(item.product.price * item.quantity)}</p>
      </div>
    </div>
  )
}

export default CheckoutItem
