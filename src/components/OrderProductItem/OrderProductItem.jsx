/* eslint-disable react/no-unescaped-entities */
import styles from './OrderProductItem.module.scss'
import classNames from 'classnames/bind'
import { toVND } from '../../helpers/vndCurrency'

const cx = classNames.bind(styles)
const link =
  'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw21a150b7/images/large/701225667001_pp_01_mcfc.png?sw=400&sh=400&sm=fit'
const OrderProductItem = () => {
  return (
    <div className={cx('order-product-item-container')}>
      <div className={cx('outside')}>
        <div className={cx('image-container')}>
          <img src={link} alt='product.png' />
        </div>
      </div>
      <div className={cx('product-details')}>
        <p className={cx('product-name')}>Kids' Manchester City Home Jersey 2023/24 With Custom Printing</p>
        <p>Số lượng: 1</p>
      </div>
      <div className={cx('total-price')}>
        <p>{toVND(300000)}</p>
      </div>
    </div>
  )
}

export default OrderProductItem
