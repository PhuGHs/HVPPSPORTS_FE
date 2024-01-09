import styles from './VoucherWallet.module.scss'
import classNames from 'classnames/bind'
import Voucher from '../../../components/Voucher/Voucher'
import { useEffect, useState } from 'react'
import { VoucherApi } from '~/api/voucher.api'
import Spinner from '~/components/Spinner/Spinner'

const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

const cx = classNames.bind(styles)
const VoucherWallet = () => {
  const [vouchers, setVouchers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await VoucherApi.getVouchers()
        setVouchers(data)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    if (isLoading) {
      fetch()
    }
  }, [isLoading])

  if (isLoading) {
    return (
      <div className={cx('spinner-container')}>
        <Spinner />
      </div>
    )
  }
  return (
    <div className={cx('wallet-container')}>
      <p className={cx('header')}>Ví voucher</p>
      <Voucher data={vouchers} />
      {vouchers.length === 0 && (
        <p style={{ textAlign: 'center' }}>Thật tiếc, hiện tại không có voucher nào có sẵn trong tài khoản của bạn.</p>
      )}
    </div>
  )
}

export default VoucherWallet
