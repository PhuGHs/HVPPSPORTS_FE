import React from 'react'
import styles from './Checkout.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faArrowLeft, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { toVND } from '../../helpers/vndCurrency'
import { dummyProductData } from '../Cart/CartPage'
import CheckoutItem from '~/components/CheckoutItem/CheckoutItem'
import Button from '~/components/Button/Button'
import { useNavigate } from 'react-router-dom'

const cx = classNames.bind(styles)
const Checkout = () => {
  const navigate = useNavigate()
  const handleNavigation = () => {
    navigate('/cart')
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
            <input type='radio' id='deliveryMethod' checked={true} />
            <label htmlFor='deliveryMethod'>
              Giao hàng tiêu chuẩn: <b>{toVND(31000)}</b>
            </label>
          </div>
        </div>
      </div>
      <div className={cx('payment-method-container')}>
        <p className={cx('header')}>PHƯƠNG THỨC THANH TOÁN</p>
        <div className={cx('payment-method')}>
          <div className={cx('payment-item')}>
            <input name='payment' type='radio' checked id='momo' />
            <div className={cx('momo')}></div>
            <label htmlFor='momo'>Ví Momo</label>
          </div>
          <div className={cx('payment-item')}>
            <input name='payment' type='radio' id='atm' />
            <div className={cx('atm')}></div>
            <label htmlFor='atm'>ATM / Internet Banking</label>
          </div>
          <div className={cx('payment-item')}>
            <input name='payment' type='radio' id='cash' />
            <div className={cx('cash')}></div>
            <label htmlFor='cash'>Thanh toán bằng tiền mặt khi nhận hàng</label>
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
          {dummyProductData.map((item, index) => (
            <CheckoutItem item={item} key={index} />
          ))}
        </div>
      </div>
      <div className={cx('footer-checkout')}>
        <div className={cx('order-info')}>
          <div className={cx('item')}>
            <p>Thành tiền: </p>
            <p>{toVND(941000)}</p>
          </div>
          <div className={cx('item')}>
            <p>Phí vận chuyển: </p>
            <p>{toVND(31000)}</p>
          </div>
          <div className={cx('item')}>
            <p className={cx('total')}>Tổng số tiền: </p>
            <b>{toVND(941000 + 31000)}</b>
          </div>
        </div>
        <div className={cx('actions')}>
          <div className={cx('return')} onClick={handleNavigation}>
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Trở về giỏ hàng</span>
          </div>
          <Button primary>Xác nhận thanh toán</Button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
