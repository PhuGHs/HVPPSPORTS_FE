/* eslint-disable react/prop-types */
import AddressItem from '../AddressItem/AddressItem'
import styles from './Address.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
const Address = ({ list }) => {
  return (
    <div className={cx('address-list')}>
      {list.map((item, index) => {
        if (index === 0) {
          return <AddressItem key={index} item={item} />
        }
        return (
          <>
            <hr />
            <AddressItem key={index} item={item} />
          </>
        )
      })}
    </div>
  )
}

export default Address
