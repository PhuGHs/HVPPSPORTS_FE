import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './SizeItem.module.scss'

const cx = classNames.bind(styles)
const SizeItem = ({ item, isSoldOut, selected, handleClick }) => {
  return (
    <div
      className={cx('size-item', {
        'size-item-selected': selected,
        'size-item-disabled': isSoldOut
      })}
      onClick={!isSoldOut && !selected ? handleClick : undefined}
    >
      <span>{item.size}</span>
    </div>
  )
}

export default SizeItem

SizeItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleClick: PropTypes.func,
  isSoldOut: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired
}
