/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from './Tab.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
const Tab = ({ isSelected, onSelect, children }) => {
  return (
    <li>
      <button className={isSelected ? cx('selected') : undefined} onClick={onSelect}>
        {children}
      </button>
      {isSelected && <div className={cx('active-tab-indicator')} />}
    </li>
  );
};

const Tabs = ({ selectedType, onSelectType, children }) => {
  return (
    <>
      <menu className={cx('tabs')}>
        <Tab isSelected={selectedType === 'Chờ đánh giá'} onSelect={() => onSelectType('Chờ đánh giá')}>
          Chờ đánh giá
        </Tab>
        <Tab isSelected={selectedType === 'Đã đánh giá'} onSelect={() => onSelectType('Đã đánh giá')}>
          Đã đánh giá
        </Tab>
      </menu>
      <div>{children}</div>
    </>
  )
}

export default Tabs
