import { toVND } from '../../../../helpers/vndCurrency'
import styles from './OrderDetails.module.scss'
import classNames from 'classnames/bind'
import OrderDetailsItem from '../../../../components/OrderDetailsItem/OrderDetailsItem'
import { useState } from 'react'
import Button from '../../../../components/Button/Button'
import { Rating } from '@mui/material'
import { AnimatePresence } from 'framer-motion'
import Modal from '~/components/Modal/Modal'

const cx = classNames.bind(styles)
const link =
  'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw21a150b7/images/large/701225667001_pp_01_mcfc.png?sw=400&sh=400&sm=fit'
const OrderDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }
  return (
    <div className={cx('container')} id='detail'>
      <div className={cx('order-info')}>
        <span className={cx('header')}>Thông tin đơn hàng</span>
        <p className={cx('status')}>Đã nhận hàng</p>
        <div className={cx('details')}>
          <div className={cx('info')}>
            <label>Mã đơn hàng:</label>
            <b>1231321892</b>
          </div>
          <div className={cx('info')}>
            <label>Ngày mua:</label>
            <b>24/08/2023</b>
          </div>
          <div className={cx('info')}>
            <label>Tổng tiền:</label>
            <b>{toVND(320000)}</b>
          </div>
        </div>
      </div>
      <div className={cx('order-2')}>
        <div className={cx('recipient-info')}>
          <span className={cx('header')}>Thông tin người nhận</span>
          <p className={cx('recipient')}>
            Lê Văn Phú | <span>0814321006</span>
          </p>
          <p className={cx('recipient')}>43 Tân Lập, Đông Hoà, Dĩ An, Bình Dương</p>
        </div>
        <div className={cx('delivery-method')}>
          <span className={cx('header')}>Phương thức vận chuyển</span>
          <p>Giao hàng tiêu chuẩn</p>
        </div>
        <div className={cx('payment-method')}>
          <span className={cx('header')}>Phương thức thanh toán</span>
          <p>Thanh toán bằng tiền mặt khi nhận hàng</p>
        </div>
      </div>
      <div className={cx('product-details')}>
        <div className={cx('table-header')}>
          <p className={cx('first')}>Sản phẩm</p>
          <p className={cx('second')}>Giá</p>
          <p className={cx('third')}>Size</p>
          <p className={cx('fourth')}>Số lượng</p>
          <p className={cx('fifth')}>Giảm giá</p>
          <p className={cx('sixth')}>Tạm tính</p>
        </div>
        <OrderDetailsItem onOpen={handleOpenModal} />
        <OrderDetailsItem />
        <div className={cx('checkout-info')}>
          <div className={cx('info')}>
            <label>Tạm tính</label>
            <p>{toVND(640000)}</p>
          </div>
          <div className={cx('info')}>
            <label>Khuyến mãi</label>
            <p>- {toVND(0)}</p>
          </div>
          <div className={cx('info')}>
            <label>Tổng cộng</label>
            <span>{toVND(640000)}</span>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <Modal title='ĐÁNH GIÁ SẢN PHẨM' onClose={handleCloseModal} className={cx('modal-content')}>
            <Rating className={cx('rating')} defaultValue={4} />
            <div className={cx('product-modal')}>
              <div className={cx('image-container')}>
                <img src={link} alt='product' />
              </div>
              <div className={cx('product-details')}>
                <span className={cx('product-name')}>
                  Kids Manchester City Home Jersey 2023/24 With Custom Printing
                </span>
                <span>Size: XL</span>
                <span>Số lượng: 1</span>
              </div>
            </div>
            <div className={cx('input')}>
              <textarea cols='30' rows='10'></textarea>
            </div>
            <div className={cx('action')}>
              <Button grey_outline onClick={handleCloseModal}>
                Huỷ
              </Button>
              <Button secondary onClick={handleCloseModal}>
                Đánh giá
              </Button>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  )
}

export default OrderDetails
