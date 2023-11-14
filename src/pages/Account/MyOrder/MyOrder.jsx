import Tabs from '../../../components/Tab/Tab'
import styles from './MyOrder.module.scss'
import classNames from 'classnames/bind'
import { useState } from 'react'
import OrderItem from '../../../components/OrderItem/OrderItem'

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
      <Tabs items={items} selectedType={selectedType} onSelectType={handleSelectType}>
        {selectedType === items[0] && (
          <div>
            <OrderItem /> <OrderItem />
          </div>
        )}
        {selectedType === items[1] && <p>Xác nhận</p>}
        {selectedType === items[2] && <p>Vận chuyển</p>}
        {selectedType === items[3] && <p>Đang giao</p>}
        {selectedType === items[4] && <p>Hoàn thành</p>}
      </Tabs>
    </div>
  )
}

export default MyOrder;