/* eslint-disable react/prop-types */
import styles from './OrderItem.module.scss'
import classNames from 'classnames/bind'
import OrderProductItem from '../OrderProductItem/OrderProductItem'
import Button from '../Button/Button'
import { toVND } from '../../helpers/vndCurrency'
import { faTruckFast, faCircleCheck, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { Helper } from '~/utils/helper'
import { OrderApi } from '~/api/order.api'
import { useContext } from 'react'
import NotificationContext from '~/store/notification-context'

const cx = classNames.bind(styles)
const OrderItem = ({ item }) => {
  const navigate = useNavigate()
  const notificationCtx = useContext(NotificationContext)
  const { order, products } = item
  const handleCancelOrder = async () => {
    try {
      const response = await OrderApi.cancelOrder(order.id)
      if (response.status === 200) {
        notificationCtx.success('Huỷ đơn hàng thành công')
      }
    } catch (error) {
      console.error(error)
      notificationCtx.error(`Có lỗi xảy ra: ${error}`)
    }
  }
  return (
    <div className={cx('container')}>
      <div className={cx('order-status')}>
        <FontAwesomeIcon icon={faTruckFast} />
        <span>{Helper.getOrderStatus(order.status)}</span>
      </div>
      {products.map((product, index) => (
        <OrderProductItem product={product.product} size={product.size} quantity={product.quantity} key={index} />
      ))}
      <div className={cx('order-total-action')}>
        <div className={cx('order-total')}>Tổng tiền: {toVND(order.value + order.shipping)}</div>
        <div className={cx('order-action')}>
          {(order.status.toLowerCase() === 'pending' || order.status.toLowerCase() == 'packaging') && (
            <Button secondary_outline onClick={handleCancelOrder}>
              Huỷ đơn
            </Button>
          )}
          <Button secondary_outline onClick={() => navigate(`${order.id}`)}>
            Xem chi tiết
          </Button>
        </div>
      </div>
    </div>
  )
}

export default OrderItem
