/* eslint-disable react/prop-types */
import MyCommentItem from '../MyCommentItem/MyCommentItem';
import styles from './MyComment.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
const MyComment = ({ data }) => {
  return (
    <div className={cx('container')}>
      {data.map((item, index) => (
        <MyCommentItem key={index} item={item} />
      ))}
    </div>
  );
};

export default MyComment