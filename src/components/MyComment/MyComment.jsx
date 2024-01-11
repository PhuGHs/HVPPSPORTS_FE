/* eslint-disable react/prop-types */
import { myReviews } from '~/utils/sharedResource'
import MyCommentItem from '../MyCommentItem/MyCommentItem'
import styles from './MyComment.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
const MyComment = ({ unreviewed, reviewed, type }) => {
  return (
    <div className={cx('container')}>
      {type === myReviews[0]
        ? unreviewed.map((item, index) => <MyCommentItem key={index} item={item} />)
        : reviewed.map((item, index) => <MyCommentItem key={index} item={item} />)}
    </div>
  )
}

export default MyComment
