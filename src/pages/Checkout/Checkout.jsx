import styles from './Checkout.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faArrowLeft, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { toVND } from '../../helpers/vndCurrency'
// import { dummyProductData } from '~/utils/sharedResource'
import CheckoutItem from '~/components/CheckoutItem/CheckoutItem'
import Button from '~/components/Button/Button'
import { useLocation, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { OrderApi } from '~/api/order.api'
import { UserContext } from '~/store/user-context'

const cx = classNames.bind(styles)
const Checkout = () => {
  const [deliveryMethod, setDeliveryMethod] = useState('normal')
  const [deliveryPrice, setDeliveryPrice] = useState(30000)
  const [paymentMethod, setPaymentMethod] = useState('cash')
  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  const handleNavigation = () => {
    navigate('/cart')
  }

  const { state } = useLocation()
  const { items = [], price = 0 } = state

  const handleDeliveryMethodChange = (event) => {
    setDeliveryPrice(() => {
      return event.target.id === 'normal' ? 30000 : 45000
    })
    setDeliveryMethod(event.target.id)
  }

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.id)
  }

  const buy = async () => {
    try {
      const data = {
        customerID: user.id,
        value: price,
        payMethod: paymentMethod,
        deliveryMethod: deliveryMethod,
        note: 'please deliver for me in the afternoon',
        shipping: deliveryPrice,
        voucherID: '',
        name: user.name,
        phone: user.phone,
        address: '43 Tân Lập, Đông Hoà, Dĩ An, Bình Dương',
        selectedProducts: items.map((item) => ({
          productID: item.productID,
          size: item.size,
          quantity: item.quantity
        }))
      }
      await OrderApi.newOrder(data)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className={cx('container')}>
      <div className={cx('address-container')}>
        <p className={cx('header')}>ĐỊA CHỈ GIAO HÀNG</p>
        <div className={cx('address')}>
          <div className={cx('list')}>
            <div className={cx('address-item')}>
              <input type='radio' id='addressItem' checked={true} />
              <label htmlFor='addressItem'>Lê Văn Phú | 43 Tân Lập, Đông Hoà, Dĩ An, Bình Dương | 0814321006</label>
            </div>
            <b>Sửa</b>
          </div>
          <div className={cx('list')}>
            <div className={cx('action')}>
              <FontAwesomeIcon icon={faPlusCircle} />
              <label>Giao hàng đến địa chỉ khác</label>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('delivery-method-container')}>
        <p className={cx('header')}>PHƯƠNG THỨC VẬN CHUYỂN</p>
        <div className={cx('delivery-method')}>
          <div className={cx('delivery-method-item')}>
            <input
              name='delivery'
              type='radio'
              id='normal'
              checked={deliveryMethod === 'normal'}
              onChange={handleDeliveryMethodChange}
            />
            <label htmlFor='deliveryMethod-normal'>
              Giao hàng tiêu chuẩn (Normal): <b>{toVND(30000)}</b>
            </label>
          </div>
          <div className={cx('delivery-method-item')}>
            <input
              name='delivery'
              type='radio'
              id='express'
              checked={deliveryMethod === 'express'}
              onChange={handleDeliveryMethodChange}
            />
            <label htmlFor='deliveryMethod-express'>
              Giao hàng nhanh (Express): <b>{toVND(45000)}</b>
            </label>
          </div>
        </div>
      </div>
      <div className={cx('payment-method-container')}>
        <p className={cx('header')}>PHƯƠNG THỨC THANH TOÁN</p>
        <div className={cx('payment-method')}>
          <div className={cx('payment-item')}>
            <input
              name='payment'
              type='radio'
              id='cash'
              checked={paymentMethod === 'cash'}
              onChange={handlePaymentMethodChange}
            />
            <div className={cx('cash')}></div>
            <label htmlFor='cash'>Thanh toán bằng tiền mặt khi nhận hàng</label>
          </div>
          <div className={cx('payment-item')}>
            <input
              name='payment'
              type='radio'
              checked={paymentMethod === 'vnpay'}
              onChange={handlePaymentMethodChange}
              id='vnpay'
            />
            <div className={cx('vnpay')}></div>
            <label htmlFor='vnpay'>Ví VNPAY</label>
          </div>
        </div>
      </div>
      <div className={cx('discount-container')}>
        <p className={cx('header')}>MÃ KHUYẾN MÃI</p>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
      <div className={cx('re-examine-container')}>
        <p className={cx('header')}>KIỂM TRA LẠI ĐƠN HÀNG</p>
        <div className={cx('products')}>
          {items.map((item, index) => (
            <CheckoutItem item={item} key={index} />
          ))}
        </div>
      </div>
      <div className={cx('footer-checkout')}>
        <div className={cx('order-info')}>
          <div className={cx('item')}>
            <p>Thành tiền: </p>
            <p>{toVND(price)}</p>
          </div>
          <div className={cx('item')}>
            <p>Phí vận chuyển: </p>
            <p>{toVND(deliveryPrice)}</p>
          </div>
          <div className={cx('item')}>
            <p className={cx('total')}>Tổng số tiền: </p>
            <b>{toVND(price + deliveryPrice)}</b>
          </div>
        </div>
        <div className={cx('actions')}>
          <div className={cx('return')} onClick={handleNavigation}>
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Trở về giỏ hàng</span>
          </div>
          <Button primary onClick={buy}>
            Xác nhận thanh toán
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
