import styles from './VoucherItem.module.scss'
import classNames from 'classnames/bind'
import voucherImage from '../../assets/images/gift.svg'

const cx = classNames.bind(styles)
const VoucherItem = ({ item }) => {
  return (
    <div className={cx('container')}>
      <div className={cx('image-container')}>
        <img src={voucherImage} alt='voucherImage' />
      </div>
      <div className={cx('voucher-details')}>
        <div className={cx('voucher-name')}>
          <h3>VOUCHER#1</h3>
        </div>
        <div className={cx('discount-value')}>
          <p>Giảm 10%</p>
          <p className={cx('condition-btn')}>Điều kiện</p>
        </div>
        <div className={cx('applicable-date')}>
          <p>Từ ngày 8/10 - 15/10</p>
        </div>
      </div>
    </div>
  )
}

export default VoucherItem
