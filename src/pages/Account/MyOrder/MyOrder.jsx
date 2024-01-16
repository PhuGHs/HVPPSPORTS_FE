import Tabs from '../../../components/Tab/Tab'
import styles from './MyOrder.module.scss'
import classNames from 'classnames/bind'
import { useContext, useEffect, useState } from 'react'
import OrderItem from '../../../components/OrderItem/OrderItem'
import { myOrders } from '~/utils/sharedResource'
import { OrderApi } from '~/api/order.api'
import { UserContext } from '~/store/user-context'
import Spinner from '~/components/Spinner/Spinner'
import { HubConnectionBuilder } from '@microsoft/signalr'

const cx = classNames.bind(styles)
const MyOrder = () => {
  const { user } = useContext(UserContext)
  const [selectedType, setSelectedType] = useState(myOrders[0])
  const [isLoading, setIsLoading] = useState(true)
  const [orders, setOrders] = useState([])
  const handleSelectType = (item) => {
    setSelectedType(item)
  }

  const [connection, setConnection] = useState(null)

  useEffect(() => {
    const connect = new HubConnectionBuilder()
      .withUrl('https://localhost:7030/chathub')
      .withAutomaticReconnect()
      .build()

    setConnection(connect)
  }, [])

  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then(() => {
          console.log('SignalR connected in OrderStatus')
        })
        .catch((error) => {
          console.error('Error starting SignalR connection:', error)
        })

      connection.on('ReceiveMessage', () => {
        setIsLoading(true)
      })
    }
    let isMounted = true

    const fetchOrders = async () => {
      try {
        const fetchedOrders = await OrderApi.getOrdersByType(user.id, selectedType.name)

        if (isMounted) {
          const ordersDetails = await Promise.all(
            fetchedOrders.map(async (order) => await OrderApi.getOrderDetailsById(order.id))
          )
          setOrders(ordersDetails)
          setIsLoading(false)
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchOrders()

    return () => {
      isMounted = false
    }
  }, [isLoading, selectedType])

  if (isLoading) {
    return (
      <div className={cx('spinner-container')}>
        <Spinner />
      </div>
    )
  }

  return (
    <div className={cx('container')}>
      <p className={cx('header')}>Đơn hàng của tôi</p>
      <Tabs items={myOrders} selectedType={selectedType} onSelectType={handleSelectType} className={cx('tabs')}>
        {orders.map((item, index) => (
          <OrderItem item={item} key={index} setIsLoading={setIsLoading} />
        ))}
      </Tabs>
    </div>
  )
}

export default MyOrder
