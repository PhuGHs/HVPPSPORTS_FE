/* eslint-disable react/prop-types */
import styles from './Dropdown.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
const Dropdown = ({ handleChange, selectedFilter, setSelectedFilter }) => {
  const handleChangeInDropDown = (event) => {
    setSelectedFilter(event.target.value)
    if (event.target.value === 'Giá tăng dần') {
      handleChange(false, 'price-order')
    } else if (event.target.value === 'Giá giảm dần') {
      handleChange(true, 'price-order')
    }
  }

  return (
    <select name='filters' className={cx('content')} value={selectedFilter} onChange={handleChangeInDropDown}>
      <option value='Giá tăng dần'>Giá tăng dần</option>
      <option value='Giá giảm dần'>Giá giảm dần</option>
    </select>
  )
}

export default Dropdown
