import styles from './ProductItem.module.scss'
import classNames from 'classnames/bind'
import Button from '../Button/Button'
import { Rating } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import PropsType from 'prop-types'
import { toVND } from '~/helpers/vndCurrency'

const cx = classNames.bind(styles)

const ProductItem = ({ product }) => {
  const navigate = useNavigate()
  const handleProductItemClick = () => {
    navigate(`/products/${product.id}`)
  }
  return (
    <div className={cx('container')} onClick={handleProductItemClick}>
      <div className={cx('image-container')}>
        <img src={product.urlThumb} alt='product' />
        <Button grey>Thêm vào giỏ hàng</Button>
      </div>
      <div className={cx('product-details')}>
        <p className={cx('product-name')}>{product.name}</p>
        <div className={cx('first')}>
          <p>
            <b>{toVND(product.price)}</b>
          </p>
          <Rating readOnly value={product.point} />
        </div>
      </div>
    </div>
  )
}

ProductItem.propTypes = {
  product: PropsType.shape({
    id: PropsType.string.isRequired,
    name: PropsType.string.isRequired,
    club: PropsType.string.isRequired,
    nation: PropsType.string.isRequired,
    season: PropsType.string.isRequired,
    price: PropsType.number.isRequired,
    sizeS: PropsType.number.isRequired,
    sizeM: PropsType.number.isRequired,
    sizeL: PropsType.number.isRequired,
    sizeXL: PropsType.number.isRequired,
    status: PropsType.string.isRequired,
    timeAdded: PropsType.string.isRequired,
    description: PropsType.string.isRequired,
    point: PropsType.number.isRequired,
    sold: PropsType.number.isRequired,
    groupName: PropsType.string.isRequired,
    urlMain: PropsType.string.isRequired,
    urlSub1: PropsType.string.isRequired,
    urlSub2: PropsType.string.isRequired,
    urlThumb: PropsType.string.isRequired
  }).isRequired
}

export default ProductItem
