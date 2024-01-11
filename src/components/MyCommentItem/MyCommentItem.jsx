/* eslint-disable react/prop-types */
import styles from './MyCommentItem.module.scss'
import classNames from 'classnames/bind'
import { Rating } from '@mui/material'
import { Helper } from '~/utils/helper'
import ModalImage from 'react-modal-image'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'

const cx = classNames.bind(styles)
const MyCommentItem = ({ item }) => {
  const navigate = useNavigate()
  return (
    <div className={cx('my-comment-container')}>
      <div className={cx('image-container')} onClick={() => navigate(`/Products/${item.product.id}`)}>
        <img src={item.product.urlThumb} alt='product' />
      </div>
      <div className={cx('comment-details')}>
        <div className={cx('product-name')}>
          <h3>{item.product.name}</h3>
          <p>{item.date ? Helper.convertToDMY(item.date) : ''}</p>
        </div>
        <div className={cx('rating-star')}>
          <Rating className={cx('star')} value={item.point ?? 0} readOnly />
        </div>
        {item.quantity && (
          <div className={cx('quantity')}>
            <p>Số lượng: {item.quantity}</p>
          </div>
        )}
        {item.size && (
          <div className={cx('quantity')}>
            <p>Size: {Helper.getActualSize(item.size)}</p>
          </div>
        )}
        <div className={cx('comment')}>
          <p>{item.comment ?? ''}</p>
        </div>
        <div className={cx('image-container')}>
          {item.media && (
            <ModalImage small={item.media} large={item.media} imageBackgroundColor='transparent' alt='image' />
          )}
        </div>
      </div>
      {!item.date && (
        <div className={cx('action')}>
          <Button secondary small onClick={() => navigate(`/account/my-orders/${item.orderID}`)}>
            Đánh giá
          </Button>
        </div>
      )}
    </div>
  )
}

export default MyCommentItem
