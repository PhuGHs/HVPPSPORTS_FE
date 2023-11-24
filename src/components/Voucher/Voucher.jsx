/* eslint-disable react/prop-types */
import styles from './Voucher.module.scss'
import classNames from 'classnames/bind'
import VoucherItem from '../VoucherItem/VoucherItem'

const cx = classNames.bind(styles)
const Voucher = ({ data }) => {
  return (
    <div className={cx('container')}>
      {data.map((item, index) => (
        <VoucherItem key={index} item={item} />
      ))}
    </div>
  )
}

export default Voucher
