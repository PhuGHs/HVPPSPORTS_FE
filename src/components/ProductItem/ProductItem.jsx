import styles from './ProductItem.module.scss'
import classNames from 'classnames/bind'
import Button from '../Button/Button'

const cx = classNames.bind(styles)
const ProductItem = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('image-container')}>
        <img
          src='https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw21a150b7/images/large/701225667001_pp_01_mcfc.png?sw=400&sh=400&sm=fit'
          alt='product'
        />
        <Button grey>Thêm vào giỏ hàng</Button>
      </div>
      <div className={cx('product-details')}>
        <p>Manchester City 22/23</p>
        <div className={cx('first')}>
          <p>
            <b>280.000đ</b>
          </p>
          <p>five stars</p>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
