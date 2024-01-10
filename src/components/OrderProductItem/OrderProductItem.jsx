/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import styles from './OrderProductItem.module.scss'
import classNames from 'classnames/bind'
import { toVND } from '../../helpers/vndCurrency'
import { Helper } from '~/utils/helper'

const cx = classNames.bind(styles)
// const link =
//   'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw21a150b7/images/large/701225667001_pp_01_mcfc.png?sw=400&sh=400&sm=fit'
const OrderProductItem = ({ product, size, quantity }) => {
  return (
    <div className={cx('order-product-item-container')}>
      <div className={cx('outside')}>
        <div className={cx('image-container')}>
          <img src={product.urlThumb} alt='product.png' />
        </div>
      </div>
      <div className={cx('product-details')}>
        <p className={cx('product-name')}>{product.name}</p>
        <p>Size: {Helper.getActualSize(size)}</p>
        <p>Số lượng: {quantity}</p>
      </div>
      <div className={cx('total-price')}>
        <p>{toVND(product.price * quantity)}</p>
      </div>
    </div>
  )
}

export default OrderProductItem
