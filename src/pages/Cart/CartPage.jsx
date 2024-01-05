import { Fragment, useContext, useState } from 'react'
import styles from './CartPage.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../components/Button/Button'
import CartItem from '../../components/CartItem/CartItem'
import { CartContext } from '../../store/cart-context'
import { toVND } from '../../helpers/vndCurrency'
import { useNavigate } from 'react-router-dom'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import EmptyCart from '../../assets/images/empty-cart.png'

const cx = classNames.bind(styles)

function CartPage() {
  const navigate = useNavigate()
  const { items, clearCart } = useContext(CartContext)
  const [selectedItems, setSelectedItems] = useState([])
  const [overallPrice, setOverallPrice] = useState(0)
  const handleNavigation = () => {
    navigate('/cart/checkout', { state: { items: selectedItems, price: overallPrice } })
  }

  const handleCheckboxChange = (item, isChecked) => {
    if (isChecked) {
      setSelectedItems((prev) => [...prev, item])
    } else {
      setSelectedItems((prev) =>
        prev.filter((selectedItem) => selectedItem.productID != item.productID && selectedItem.size != item.size)
      )
    }
  }

  const handleSingleCheckboxChange = (returnedItem, isChecked) => {
    handleCheckboxChange(returnedItem, isChecked)

    const selectedItem = items.find(
      (item) => item.productID === returnedItem.productID && item.size === returnedItem.size
    )
    const priceChange = isChecked
      ? selectedItem.product.price * selectedItem.quantity
      : -selectedItem.product.price * selectedItem.quantity
    setOverallPrice((prevOverallPrice) => prevOverallPrice + priceChange)
  }

  const handleCheckAllChange = (isChecked) => {
    setSelectedItems(isChecked ? items : [])
    const priceChange = isChecked ? items.reduce((total, item) => total + item.product.price * item.quantity, 0) : 0
    setOverallPrice(priceChange)
  }

  return (
    <Fragment>
      <h1>Giỏ hàng</h1>
      {items.length > 0 && (
        <div className={cx('main-content')}>
          <div className={cx('product-container')}>
            <div className={cx('product-header')}>
              <div className={cx('first-col')}>
                <input
                  type='checkbox'
                  checked={selectedItems.length === items.length}
                  onChange={(event) => handleCheckAllChange(event.target.checked)}
                />
              </div>
              <div className={cx('second-col')}>
                <p>Chọn tất cả ({items.length} sản phẩm)</p>
              </div>
              <div className={cx('third-col')}>
                <p>Số lượng</p>
              </div>
              <div className={cx('fourth-col')}>
                <p>Thành tiền</p>
              </div>
              <div className={cx('fifth-col')} onClick={clearCart}>
                <FontAwesomeIcon icon={faTrashCan} />
              </div>
            </div>
            <div className={cx('product-list')}>
              {items.map((item, index) => {
                return (
                  <>
                    {index ? <hr style={{ margin: '10px 30px' }} /> : null}
                    <CartItem
                      key={index}
                      id={item.product.id}
                      item={item}
                      src={item.product.urlThumb}
                      handleChecked={handleSingleCheckboxChange}
                      price={item.product.price}
                      name={item.product.name}
                      size={item.size}
                      quantity={item.quantity}
                      isSelected={selectedItems.some(
                        (selectedItem) => selectedItem.id === item.id && selectedItem.size === item.size
                      )}
                    />
                  </>
                )
              })}
            </div>
          </div>
          <div className={cx('checkout-container')}>
            <div className={cx('total')}>
              <p>
                <b style={{ fontSize: '2rem' }}>Tổng số tiền</b>
              </p>
              <p>
                <b style={{ fontSize: '2.5rem', color: 'rgba(254, 44, 85, 1)' }}>{toVND(overallPrice)}</b>
              </p>
            </div>
            <Button large primary onClick={handleNavigation} disabled={selectedItems.length === 0}>
              THANH TOÁN
            </Button>
          </div>
        </div>
      )}
      {items.length === 0 && <img className={cx('emptycart')} src={EmptyCart} alt='empty-cart.png' />}
      <div className={cx('footer-checkout')}>
        <p>
          Tổng thanh toán: <b>{toVND(960000)}</b>
        </p>
        <div className={cx('checkout')} onClick={handleNavigation}>
          Thanh Toán
        </div>
      </div>
    </Fragment>
  )
}

export default CartPage
