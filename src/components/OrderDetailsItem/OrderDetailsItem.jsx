/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Helper } from '~/utils/helper'
import { toVND } from '../../helpers/vndCurrency'
import Button from '../Button/Button'
import styles from './OrderDetailsItem.module.scss'
import classNames from 'classnames/bind'
import { useNavigate } from 'react-router-dom'

const cx = classNames.bind(styles)
const OrderDetailsItem = ({ product, status, onOpen, handleSelect }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    onOpen()
    handleSelect()
  }
  return (
    <div className={cx('container')}>
      <div className={cx('product')}>
        <div className={cx('image-container')} onClick={() => navigate(`/Products/${product.product.id}`)}>
          <img src={product.product.urlThumb} alt='product' />
        </div>
        <div className={cx('product-name-actions')}>
          <p className={cx('product-name')}>{product.product.name}</p>
          <div className={cx('mb-product-info')}>
            <p>x{product.quantity}</p>
            <p>{toVND(product.product.price)}</p>
          </div>
          {status === 'completed' && (
            <div>
              {!product.didFeedback && (
                <Button secondary_outline small onClick={handleClick}>
                  Viết nhận xét
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
      <div className={cx('price')}>{toVND(product.product.price)}</div>
      <div className={cx('size')}>{Helper.getActualSize(product.size)}</div>
      <div className={cx('quantity')}>{product.quantity}</div>
      <div className={cx('totalPrice')}>{toVND(product.product.price * product.quantity)}</div>
    </div>
  )
}

export default OrderDetailsItem
