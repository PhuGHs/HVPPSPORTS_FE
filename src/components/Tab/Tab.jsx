/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from './Tab.module.scss'
import classNames from 'classnames/bind'
import { motion } from 'framer-motion'

const cx = classNames.bind(styles)
const Tab = ({ isSelected, onSelect, isDisabled, children }) => {
  return (
    <li>
      <button
        className={cx('tab-button', {
          selected: isSelected,
          disabled: isDisabled
        })}
        disabled={isDisabled}
        onClick={onSelect}
      >
        {children}
      </button>
      {isSelected && <motion.div layoutId='tab-indicator' className={cx('active-tab-indicator')} />}
    </li>
  )
}

const Tabs = ({ selectedType, onSelectType, items, hasFullWidth, children }) => {
  return (
    <>
      <menu
        className={cx('tabs', {
          'tabs-full': hasFullWidth
        })}
      >
        {items.map((item, index) => (
          <Tab
            className={cx('tab')}
            key={index}
            isSelected={selectedType === item}
            onSelect={() => onSelectType(item)}
            isDisabled={item.disabled}
          >
            {item.name}
          </Tab>
        ))}
      </menu>
      <div>{children}</div>
    </>
  )
}

export default Tabs
