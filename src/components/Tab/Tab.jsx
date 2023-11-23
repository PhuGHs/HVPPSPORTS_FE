/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from './Tab.module.scss'
import classNames from 'classnames/bind'
import { motion } from 'framer-motion'

const cx = classNames.bind(styles)
const Tab = ({ isSelected, onSelect, children }) => {
  return (
    <li>
      <button className={isSelected ? cx('selected') : undefined} onClick={onSelect}>
        {children}
      </button>
      {isSelected && <motion.div layoutId='tab-indicator' className={cx('active-tab-indicator')} />}
    </li>
  )
}

const Tabs = ({ selectedType, onSelectType, items, children }) => {
  return (
    <>
      <menu className={cx('tabs')}>
        {items.map((item, index) => (
          <Tab className={cx('tab')} key={index} isSelected={selectedType === item} onSelect={() => onSelectType(item)}>
            {item}
          </Tab>
        ))}
      </menu>
      <div>{children}</div>
    </>
  )
}

export default Tabs
