/* eslint-disable react/prop-types */
import { Rating } from '@mui/material'
import styles from './ReviewItem.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import ModalImage from 'react-modal-image'

const cx = classNames.bind(styles)
const ReviewItem = ({ item }) => {
  return (
    <div className={cx('review')}>
      <div className={cx('reviewer-avatar')}>
        <img src={item.customer.avatar} alt='user-image' />
      </div>
      <div className={cx('review-details')}>
        <div className={cx('reviewer-name')}>{item.customer.name}</div>
        <div className={cx('rating-star')}>
          <Rating className={cx('rating')} readOnly value={item.point} />
          <p>Cực kỳ hài lòng</p>
        </div>
        <div className={cx('bought-certify')}>
          <FontAwesomeIcon icon={faCircleCheck} />
          <p>Đã mua hàng</p>
        </div>
        <div className={cx('review-time')}>
          {item.createdAt} | Size: {item.size}
        </div>
        <div className={cx('review-comment')}>{item.comment}</div>
        <div className={cx('image-container')}>
          <ModalImage small={item.media} large={item.media} imageBackgroundColor='transparent' alt='image' />
        </div>
      </div>
    </div>
  )
}

export default ReviewItem
