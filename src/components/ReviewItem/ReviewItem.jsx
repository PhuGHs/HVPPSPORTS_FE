/* eslint-disable react/prop-types */
import { Rating } from '@mui/material'
import styles from './ReviewItem.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)
const ReviewItem = ({ item }) => {
  return (
    <div className={cx('review')}>
      <div className={cx('reviewer-avatar')}>
        <img src={item.userAvatar} alt='user-image' />
      </div>
      <div className={cx('review-details')}>
        <div className={cx('reviewer-name')}>{item.username}</div>
        <div className={cx('rating-star')}>
          <Rating className={cx('rating')} readOnly value={item.rating} />
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
      </div>
    </div>
  )
}

export default ReviewItem
