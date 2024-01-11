/* eslint-disable react/prop-types */
import AddressItem from '../AddressItem/AddressItem'
import styles from './Address.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
const Address = ({ list, handleOpenModal, setIsLoading }) => {
  return (
    <div className={cx('address-list')}>
      {list.map((item, index) => {
        if (index === 0) {
          return <AddressItem key={index} item={item} handleOpenModal={handleOpenModal} setIsLoading={setIsLoading} />
        }
        return (
          <>
            <hr />
            <AddressItem key={index} handleOpenModal={handleOpenModal} setIsLoading={setIsLoading} item={item} />
          </>
        )
      })}
    </div>
  )
}

export default Address
