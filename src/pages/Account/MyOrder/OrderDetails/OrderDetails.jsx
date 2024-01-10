import { toVND } from '../../../../helpers/vndCurrency'
import styles from './OrderDetails.module.scss'
import classNames from 'classnames/bind'
import OrderDetailsItem from '../../../../components/OrderDetailsItem/OrderDetailsItem'
import { useContext, useEffect, useRef, useState } from 'react'
import Button from '../../../../components/Button/Button'
import { Rating } from '@mui/material'
import { AnimatePresence } from 'framer-motion'
import Modal from '~/components/Modal/Modal'
import { OrderApi } from '~/api/order.api'
import { useParams } from 'react-router-dom'
import { Helper } from '~/utils/helper'
import Spinner from '~/components/Spinner/Spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import NotificationContext from '~/store/notification-context'
import { UserContext } from '~/store/user-context'
import { FeedbackApi } from '~/api/feedback.api'

function getOverallPrice(items) {
  return items.reduce((total, item) => total + item.product.price * item.quantity, 0)
}

const cx = classNames.bind(styles)
const OrderDetails = () => {
  const notificationCtx = useContext(NotificationContext)
  const { user } = useContext(UserContext)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] = useState(false)
  const [orderDetails, setOrderDetails] = useState({})
  const [selectedItemOpen, setSelectedItemOpen] = useState({})
  const { id } = useParams()
  const [rating, setRating] = useState(0)
  const [file, setFile] = useState('')
  const [comment, setComment] = useState('')

  const handleCancelOrder = async () => {
    try {
      const response = await OrderApi.cancelOrder(id)
      if (response.status === 200) {
        notificationCtx.success('Huỷ đơn hàng thành công')
        setIsConfirmationDialogOpen(false)
      }
    } catch (error) {
      console.error(error)
      notificationCtx.error(`Có lỗi xảy ra: ${error}`)
      setIsConfirmationDialogOpen(false)
    }
  }

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleOpenConfirmationDialog = () => {
    setIsConfirmationDialogOpen(true)
  }

  const handleCloseConfirmationDialog = () => {
    setIsConfirmationDialogOpen(false)
  }

  const handleFeedbackChange = async (event, type) => {
    if (type === 'rating') {
      setRating(event.target.value)
    } else if (type === 'comment') {
      setComment(event.target.value)
    } else {
      if (!event.target.files) return
      if (Helper.checkFile(event.target.files[0])) {
        const file = await Helper.readAsBase64(event.target.files[0])
        setFile(file.substring('data:image/jpeg;base64,'.length))
      }
    }
  }

  const handleAddFeedback = async () => {
    const body = {
      customerID: user.id,
      productID: selectedItemOpen.product.id,
      comment: comment,
      point: rating,
      media: file
    }
    if (comment === '' || rating === 0) return

    try {
      await FeedbackApi.addFeedback(body)
      notificationCtx.success(`Đã đánh giá cho sản phẩm ${body.productID}`)
    } catch (error) {
      console.error(error)
      notificationCtx.error(`Lỗi xảy ra: ${error.message}`)
    }
  }

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await OrderApi.getOrderDetailsById(id)
        setOrderDetails(data)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      }
    }
    if (isLoading) {
      fetch()
    }
  }, [id, isLoading])

  if (isLoading) {
    return (
      <div className={cx('spinner-container')}>
        <Spinner />
      </div>
    )
  }

  return (
    <div className={cx('container')} id='detail'>
      <div className={cx('order-info')}>
        <span className={cx('header')}>Thông tin đơn hàng</span>
        <p
          className={cx('status', {
            pending: orderDetails.order.status.toLowerCase() === 'pending',
            packaging: orderDetails.order.status.toLowerCase() === 'packaging',
            delivering: orderDetails.order.status.toLowerCase() === 'delivering',
            completed: orderDetails.order.status.toLowerCase() === 'completed'
          })}
        >
          {Helper.getOrderStatus(orderDetails.order.status)}
        </p>
        <div className={cx('details')}>
          <div className={cx('info')}>
            <label>Mã đơn hàng:</label>
            <b>{orderDetails.order.id}</b>
          </div>
          <div className={cx('info')}>
            <label>Ngày đặt hàng:</label>
            <b>{Helper.convertToDMY(orderDetails.order.timeCreate)}</b>
          </div>
          <div className={cx('info')}>
            <label>Tổng tiền:</label>
            <b>{toVND(orderDetails.order.value)}</b>
          </div>
        </div>
      </div>
      <div className={cx('order-2')}>
        <div className={cx('recipient-info')}>
          <span className={cx('header')}>Thông tin người nhận</span>
          <p className={cx('recipient')}>
            {orderDetails.order.name} | <span>{orderDetails.order.phone}</span>
          </p>
          <p className={cx('recipient')}>{orderDetails.order.address}</p>
        </div>
        <div className={cx('delivery-method')}>
          <span className={cx('header')}>Phương thức vận chuyển</span>
          <p>{Helper.getActualDeliveryMethod(orderDetails.order.deliveryMethod)}</p>
        </div>
        <div className={cx('payment-method')}>
          <span className={cx('header')}>Phương thức thanh toán</span>
          <p>{Helper.getActualPaymentMethod(orderDetails.order.payMethod)}</p>
        </div>
      </div>
      <div className={cx('product-details')}>
        <div className={cx('table-header')}>
          <p className={cx('first')}>Sản phẩm</p>
          <p className={cx('second')}>Giá</p>
          <p className={cx('third')}>Size</p>
          <p className={cx('fourth')}>Số lượng</p>
          <p className={cx('sixth')}>Tạm tính</p>
        </div>
        {orderDetails.products.map((item, index) => (
          <OrderDetailsItem
            product={item}
            status={orderDetails.order.status.toLowerCase()}
            handleSelect={() => setSelectedItemOpen(item)}
            onOpen={handleOpenModal}
            key={index}
          />
        ))}
        <div className={cx('checkout-info')}>
          <div className={cx('info')}>
            <label>Tạm tính</label>
            <p>{toVND(getOverallPrice(orderDetails.products))}</p>
          </div>
          <div className={cx('info')}>
            <label>Phí vận chuyển</label>
            <p>{toVND(orderDetails.order.shipping)}</p>
          </div>
          <div className={cx('info')}>
            <label>Tổng cộng</label>
            <span>{toVND(orderDetails.order.value + orderDetails.order.shipping)}</span>
          </div>
        </div>
        <div className={cx('action')}>
          <Button
            disabled={
              orderDetails.order.status.toLowerCase() !== 'pending' &&
              orderDetails.order.status.toLowerCase() !== 'packaging'
            }
            secondary
            onClick={handleOpenConfirmationDialog}
          >
            Huỷ đơn
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <Modal title='ĐÁNH GIÁ SẢN PHẨM' onClose={handleCloseModal} className={cx('modal-content')}>
            <Rating
              className={cx('rating')}
              defaultValue={4}
              value={rating}
              onChange={(event) => handleFeedbackChange(event, 'rating')}
            />
            <div className={cx('product-modal')}>
              <div className={cx('image-container')}>
                <img src={selectedItemOpen.product.urlThumb} alt='product' />
              </div>
              <div className={cx('product-details')}>
                <span className={cx('product-name')}>{selectedItemOpen.product.name}</span>
                <span>Size: {Helper.getActualSize(selectedItemOpen.size)}</span>
                <span>Số lượng: {selectedItemOpen.quantity}</span>
              </div>
            </div>
            <div className={cx('input')}>
              <textarea cols='30' rows='10' onChange={(event) => handleFeedbackChange(event, 'comment')}></textarea>
            </div>
            <div className={cx('image')}>
              <span>
                Thêm Ảnh <FontAwesomeIcon icon={faImage} />
              </span>
              <input type='file' onChange={(event) => handleFeedbackChange(event, 'file')} />
            </div>
            <div className={cx('action')}>
              <Button grey_outline onClick={handleCloseModal}>
                Huỷ
              </Button>
              <Button secondary onClick={handleAddFeedback}>
                Đánh giá
              </Button>
            </div>
          </Modal>
        )}
        {isConfirmationDialogOpen && (
          <Modal onClose={handleCloseConfirmationDialog} className={cx('modal-confirmation')}>
            <p>Bạn có thực sự muốn huỷ đơn hàng?</p>
            <div className={cx('action')}>
              <Button secondary_outline onClick={handleCloseConfirmationDialog}>
                Không
              </Button>
              <Button secondary onClick={handleCancelOrder}>
                Huỷ đơn
              </Button>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  )
}

export default OrderDetails
