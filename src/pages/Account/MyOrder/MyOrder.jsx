import Tabs from '../../../components/Tab/Tab'
import styles from './MyOrder.module.scss'
import classNames from 'classnames/bind'
import { useState } from 'react'
import OrderItem from '../../../components/OrderItem/OrderItem'
import { myOrders } from '~/utils/sharedResource'

const cx = classNames.bind(styles)
const MyOrder = () => {
  const [selectedType, setSelectedType] = useState(myOrders[0])
  const handleSelectType = (item) => {
    setSelectedType(item)
  }
  return (
    <div className={cx('container')}>
      <p className={cx('header')}>Đơn hàng của tôi</p>
      <Tabs items={myOrders} selectedType={selectedType} onSelectType={handleSelectType} className={cx('tabs')}>
        {selectedType === myOrders[0] && (
          <div>
            <OrderItem /> <OrderItem />
          </div>
        )}
        {selectedType === myOrders[1] && <p>Xác nhận</p>}
        {selectedType === myOrders[2] && <p>Vận chuyển</p>}
        {selectedType === myOrders[3] && <p>Đang giao</p>}
        {selectedType === myOrders[4] && <p>Hoàn thành</p>}
      </Tabs>
    </div>
  )
}

export default MyOrder
