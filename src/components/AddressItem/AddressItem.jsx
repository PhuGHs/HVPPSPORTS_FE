/* eslint-disable react/prop-types */
import styles from './AddressItem.module.scss'
import classNames from 'classnames/bind'
import Button from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)
const AddressItem = ({ item }) => {
  return (
    <div className={cx('container')}>
      <div className={cx('first-row')}>
        <p>
          {item.name} | <span>{item.phone}</span>
        </p>
        <div className={cx('actions')}>
          <Button small>Cập nhật</Button>
          <FontAwesomeIcon className={cx('mb-ic-btn')} icon={faEdit} />
          {!item.isDefault && <>
            <Button small>Xoá</Button>
              <FontAwesomeIcon className={cx('mb-ic-btn')} icon={faTrashCan} />
            </>
          }
        </div>
      </div>
      <div className={cx('second-row')}>
        <p>{item.address}</p>
      </div>
      {item.isDefault ? (
        <div className={cx('last-row')}>
          <div className={cx('outline-rectangle')}>
            <p>Mặc định</p>
          </div>
        </div>
      ) : (
        <div className={cx('last-row-end')}>
          <div className={cx('outline-rectangle-end')}>
            <p>Thiết lập mặc định</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default AddressItem
