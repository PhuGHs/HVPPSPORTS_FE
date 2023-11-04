/* eslint-disable react/prop-types */
import styles from './Accordion.module.scss'
import classNames from 'classnames/bind'
import { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)
const Accordion = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const secondSectionRef = useRef(null)

  const handleClick = () => {
    setIsExpanded((prev) => !prev)
  }

  const { key, value } = item

  useEffect(() => {
    if (isExpanded) {
      secondSectionRef.current.style.height = `${secondSectionRef.current.scrollHeight}px`
    } else {
      secondSectionRef.current.style.height = '0px'
    }
  }, [isExpanded])

  return (
    <div className={cx('accordion')}>
      <div className={cx('first')} onClick={handleClick}>
        <span>{key}</span>
        <FontAwesomeIcon icon={isExpanded ? faAngleUp : faAngleDown}/>
      </div>
      <div className={cx('second', { expanded: isExpanded })} ref={secondSectionRef}>
        <p>{value}</p>
      </div>
    </div>
  )
}

export default Accordion