/* eslint-disable react/prop-types */
import styles from './AddressItem.module.scss'
import classNames from 'classnames/bind'
import Button from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { AddressApi } from '~/api/address.api'
import { useContext } from 'react'
import { UserContext } from '~/store/user-context'

const cx = classNames.bind(styles)
const AddressItem = ({ item, handleOpenModal, setIsLoading }) => {
  const { user } = useContext(UserContext)
  const setDefault = async () => {
    await AddressApi.setAnAddressAsDefault(user.id, item.priority)
    setIsLoading(true)
  }

  const deleteAnAddress = async () => {
    await AddressApi.deleteAnAddress(user.id, item.priority)
    setIsLoading(true)
  }
  return (
    <div className={cx('container')}>
      <div className={cx('first-row')}>
        <p>
          {item.name} | <span>{item.phone}</span>
        </p>
        <div className={cx('actions')}>
          <Button small onClick={handleOpenModal}>
            Cập nhật
          </Button>
          <FontAwesomeIcon className={cx('mb-ic-btn')} icon={faEdit} />

          {item.priority !== 1 && (
            <>
              <Button small onClick={deleteAnAddress}>
                Xoá
              </Button>
              <FontAwesomeIcon className={cx('mb-ic-btn')} icon={faTrashCan} />
            </>
          )}
        </div>
      </div>
      <div className={cx('second-row')}>
        <p>{item.address}</p>
      </div>
      {item.priority === 1 ? (
        <div className={cx('last-row')}>
          <div className={cx('outline-rectangle')}>
            <p>Mặc định</p>
          </div>
        </div>
      ) : (
        <div className={cx('last-row-end')}>
          <div className={cx('outline-rectangle-end')} onClick={setDefault}>
            <p>Thiết lập mặc định</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default AddressItem
