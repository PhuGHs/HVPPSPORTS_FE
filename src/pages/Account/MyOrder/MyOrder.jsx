import Tabs from '../../../components/Tab/Tab'
import styles from './MyOrder.module.scss'
import classNames from 'classnames/bind'
import { useState } from 'react'

const cx = classNames.bind(styles)
const items = ['Tất cả', 'Xác nhận', 'Vận chuyển', 'Đang giao', 'Hoàn thành']
const MyOrder = () => {
  const [selectedType, setSelectedType] = useState(items[0])
  const handleSelectType = (item) => {
    setSelectedType(item)
  }
  return (
    <div className={cx('container')}>
      <p className={cx('header')}>Đơn hàng của tôi</p>
      <Tabs items={items} selectedType={selectedType} onSelectType={handleSelectType} />
    </div>
  )
}

export default MyOrder;