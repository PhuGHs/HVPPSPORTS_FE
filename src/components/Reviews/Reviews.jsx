/* eslint-disable react/prop-types */
import ReviewItem from '../ReviewItem/ReviewItem'
import styles from './Reviews.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
const Reviews = ({ reviews }) => {
  return (
    <div className={cx('reviews')}>
      {reviews.length === 0 && (
        <p style={{ textAlign: 'center', fontSize: '2rem' }}>Sản phẩm này hiện chưa có đánh giá từ người dùng</p>
      )}
      {reviews.map((item, index) => {
        if (index === 0) {
          return <ReviewItem key={index} item={item} />
        }
        return (
          <>
            <hr style={{ margin: '20px' }} />
            <ReviewItem key={index} item={item} />
          </>
        )
      })}
    </div>
  )
}

export default Reviews
