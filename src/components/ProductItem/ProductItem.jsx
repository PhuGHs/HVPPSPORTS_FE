import styles from './ProductItem.module.scss'
import classNames from 'classnames/bind'
import Button from '../Button/Button'
import { Rating } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const cx = classNames.bind(styles)

const ProductItem = () => {
  const navigate = useNavigate()
  const handleProductItemClick = () => {
    navigate('/products/1')
  }
  return (
    <div className={cx('container')} onClick={handleProductItemClick}>
      <div className={cx('image-container')}>
        <img
          src='https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw21a150b7/images/large/701225667001_pp_01_mcfc.png?sw=400&sh=400&sm=fit'
          alt='product'
        />
        <Button grey>Thêm vào giỏ hàng</Button>
      </div>
      <div className={cx('product-details')}>
        <p className={cx('product-name')}>Kids Manchester City Home Jersey 2023/24 With Custom Printing</p>
        <div className={cx('first')}>
          <p>
            <b>280.000đ</b>
          </p>
          <Rating readOnly value={4} />
        </div>
      </div>
    </div>
  )
}

export default ProductItem
