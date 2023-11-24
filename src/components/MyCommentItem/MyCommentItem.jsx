import styles from './MyCommentItem.module.scss'
import classNames from 'classnames/bind'
import { Rating } from '@mui/material'

const cx = classNames.bind(styles)
const MyCommentItem = ({ item }) => {
  return (
    <div className={cx('my-comment-container')}>
      <div className={cx('image-container')}>
        <img
          src='https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw21a150b7/images/large/701225667001_pp_01_mcfc.png?sw=400&sh=400&sm=fit'
          alt='product'
        />
      </div>
      <div className={cx('comment-details')}>
        <div className={cx('product-name')}>
          <h3>Manchester City 22/23</h3>
          <p>21:55, 10/8/2023</p>
        </div>
        <div className={cx('quantity')}>
          <p>Số lượng: 1</p>
        </div>
        <div className={cx('rating-star')}>
          <Rating className={cx('star')} value={5} readOnly />
        </div>
        <div className={cx('comment')}>
          <p>Sản phẩm đẹp</p>
        </div>
      </div>
    </div>
  )
}

export default MyCommentItem
