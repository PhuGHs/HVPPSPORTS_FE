import styles from './OrderItem.module.scss'
import classNames from 'classnames/bind'
import OrderProductItem from '../OrderProductItem/OrderProductItem'
import Button from '../Button/Button'
import { toVND } from '../../helpers/vndCurrency'
import { faTruckFast, faCircleCheck, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

const cx = classNames.bind(styles)
const OrderItem = () => {
  const navigate = useNavigate();
  return (
    <div className={cx('container')}>
      <div className={cx('order-status')}>
        <FontAwesomeIcon icon={faTruckFast} />
        <span>Giao hàng thành công</span>
      </div>
      <OrderProductItem />
      <div className={cx('order-total-action')}>
        <div className={cx('order-total')}>Tổng tiền: {toVND(126000)}</div>
        <div className={cx('order-action')}>
          <Button secondary_outline>Mua lại</Button>
          <Button secondary_outline onClick={() => navigate('1')}>
            Xem chi tiết
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;