/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { toVND } from '../../helpers/vndCurrency'
import Button from '../Button/Button'
import styles from './OrderDetailsItem.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
const link =
  'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw21a150b7/images/large/701225667001_pp_01_mcfc.png?sw=400&sh=400&sm=fit'
const OrderDetailsItem = ({ onOpen }) => {
  return (
    <div className={cx('container')}>
      <div className={cx('product')}>
        <div className={cx('image-container')}>
          <img src={link} alt='product' />
        </div>
        <div className={cx('product-name-actions')}>
          <p className={cx('product-name')}>Kids' Manchester City Home Jersey 2023/24 With Custom Printing</p>
          <div className={cx('mb-product-info')}>
            <p>x1</p>
            <p>{toVND(320000)}</p>
          </div>
          <div>
            <Button secondary_outline small onClick={onOpen}>
              Viết nhận xét
            </Button>
            <Button secondary_outline small>
              Mua lại
            </Button>
          </div>
        </div>
      </div>
      <div className={cx('price')}>{toVND(320000)}</div>
      <div className={cx('size')}>XL</div>
      <div className={cx('quantity')}>1</div>
      <div className={cx('discount')}>{toVND(0)}</div>
      <div className={cx('totalPrice')}>{toVND(320000)}</div>
    </div>
  )
}

export default OrderDetailsItem
