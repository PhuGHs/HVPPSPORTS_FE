import styles from './VoucherWallet.module.scss'
import classNames from 'classnames/bind'
import Voucher from '../../../components/Voucher/Voucher'

const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

const cx = classNames.bind(styles)
const VoucherWallet = () => {
  return (
    <div className={cx('wallet-container')}>
      <p className={cx('header')}>Ví voucher</p>
      <Voucher data={data} />
    </div>
  )
}

export default VoucherWallet