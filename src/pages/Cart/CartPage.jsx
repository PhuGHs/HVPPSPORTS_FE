import { Fragment, useContext } from 'react'
import styles from './CartPage.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faTags } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/Button/Button'
import CartItem from '../../components/CartItem/CartItem'
import { CartContext } from '../../store/cart-context'
import { toVND } from '../../helpers/vndCurrency'

const cx = classNames.bind(styles)
const dummyProductData = [
  {
    id: 1,
    src: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw21a150b7/images/large/701225667001_pp_01_mcfc.png?sw=400&sh=400&sm=fit',
    name: "Kids' Manchester City Home Jersey 2023/24 With Custom Printing",
    price: 230000,
    quantity: 1
  },
  {
    id: 2,
    src: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw21a150b7/images/large/701225667001_pp_01_mcfc.png?sw=400&sh=400&sm=fit',
    name: "Kids' Manchester City Home Jersey 2023/24 With Custom Printing",
    price: 280000,
    quantity: 1
  },
  {
    id: 3,
    src: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw21a150b7/images/large/701225667001_pp_01_mcfc.png?sw=400&sh=400&sm=fit',
    name: "Kids' Manchester City Home Jersey 2023/24 With Custom Printing",
    price: 300000,
    quantity: 1
  }
]

function CartPage() {
  const cartCtx = useContext(CartContext)
  return (
    <Fragment>
      <h1>Giỏ hàng</h1>
      <div className={cx('main-content')}>
        <div className={cx('product-container')}>
          <div className={cx('product-header')}>
            <div className={cx('first-col')}>
              <input type='checkbox' />
            </div>
            <div className={cx('second-col')}>
              <p>Chọn tất cả (2 sản phẩm)</p>
            </div>
            <div className={cx('third-col')}>
              <p>Số lượng</p>
            </div>
            <div className={cx('fourth-col')}>
              <p>Thành tiền</p>
            </div>
            <div className={cx('fifth-col')}></div>
          </div>
          <div className={cx('product-list')}>
            {dummyProductData.map((product, index) => {
              return (
                <>
                  {index ? <hr style={{ margin: '10px 30px' }} /> : null}
                  <CartItem
                    key={index}
                    src={product.src}
                    price={product.price}
                    name={product.name}
                    quantity={product.quantity}
                  />
                </>
              )
            })}
          </div>
        </div>
        <div className={cx('discount-checkout-container')}>
          <div className={cx('discount-container')}>
            <div className={cx('discount-header')}>
              <div className={cx('discount-header-content')}>
                <FontAwesomeIcon icon={faTags} />
                <span>KHUYẾN MÃI</span>
              </div>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
            <hr />
            <div className={cx('discount-items')}>items</div>
          </div>
          <div className={cx('checkout-container')}>
            <div className={cx('sub-total')}>
              <p>Thành tiền</p>
              <p>0đ</p>
            </div>
            <hr />
            <div className={cx('total')}>
              <p>
                <b style={{ fontSize: '2rem' }}>Tổng số tiền</b>
              </p>
              <p>
                <b style={{ fontSize: '2.5rem', color: 'rgba(254, 44, 85, 1)' }}>0đ</b>
              </p>
            </div>
            <Button large primary>
              THANH TOÁN
            </Button>
          </div>
        </div>
      </div>
      <div className={cx('footer-checkout')}>
        <p>
          Tổng thanh toán: <b>{toVND(960000)}</b>
        </p>
        <div className={cx('checkout')}>Thanh Toán</div>
      </div>
    </Fragment>
  )
}

export default CartPage
