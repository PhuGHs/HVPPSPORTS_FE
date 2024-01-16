/* eslint-disable react/prop-types */
import styles from './VoucherItem.module.scss'
import classNames from 'classnames/bind'
import voucherImage from '../../assets/images/gift.svg'
import { Helper } from '~/utils/helper'
import Button from '../Button/Button'

const cx = classNames.bind(styles)
const VoucherItem = ({ item, in: isIn = false, handleSelect, selected }) => {
  return (
    <div className={cx('container')}>
      <div className={cx('left')}>
        <div className={cx('image-container')}>
          <img src={voucherImage} alt='voucherImage' />
        </div>
        <div className={cx('voucher-details')}>
          <div className={cx('voucher-name')}>
            <h3>{item.name}</h3>
          </div>
          <div className={cx('discount-value')}>
            <p>Giảm {item.value}%</p>
          </div>
          <div className={cx('applicable-date')}>
            <p>
              Từ ngày {Helper.convertToDMYWithoutHours(item.dateBegin)} -{' '}
              {Helper.convertToDMYWithoutHours(item.dateEnd)}
            </p>
          </div>
        </div>
      </div>
      {isIn && (
        <div className={cx('right')}>
          <Button
            secondary
            small
            onClick={() => {
              selected ? handleSelect(null) : handleSelect(item)
            }}
          >
            {selected ? 'Bỏ chọn' : 'Chọn'}
          </Button>
        </div>
      )}
    </div>
  )
}

export default VoucherItem
