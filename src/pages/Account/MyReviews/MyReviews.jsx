import MyComment from '../../../components/MyComment/MyComment'
import styles from './MyReviews.module.scss'
import classNames from 'classnames/bind'
import Tabs from '../../../components/Tab/Tab'
import { useState } from 'react'

const cx = classNames.bind(styles)
const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
const items = ['Chờ đánh giá', 'Đã đánh giá']
const MyReviews = () => {
  const [selectedType, setSelectedType] = useState(items[0])

  const handleSelectType = (type) => {
    setSelectedType(type)
  }
  return (
    <div className={cx('container')}>
      <p className={cx('head-name')}>Đánh giá của tôi</p>
      <Tabs onSelectType={handleSelectType} selectedType={selectedType} items={items}></Tabs>
      <MyComment data={data} />
      {/* <p className={cx('header')}>Nhận xét của tôi</p>
      <Tabs onSelectType={handleSelectType} selectedType={selectedType} items={items}></Tabs>
      <MyComment data={data} /> */}
    </div>
  )
}

export default MyReviews
