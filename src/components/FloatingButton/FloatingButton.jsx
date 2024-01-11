import { useState } from 'react'
import styles from './FloatingButton.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faComments, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Messages from '../Messages/Messages'

const cx = classNames.bind(styles)
const FloatingButton = () => {
  const [isChatVisible, setIsChatVisible] = useState(false)

  const toggle = () => {
    setIsChatVisible(!isChatVisible)
  }
  return (
    <div className={cx('container')}>
      <button onClick={toggle} className={cx('float-button')}>
        <FontAwesomeIcon icon={faComments} />
      </button>

      {isChatVisible && (
        <div className={cx('chat-container')}>
          <div className={cx('header')}>
            <p>Hỗ trợ trực tuyến</p>
            <FontAwesomeIcon icon={faClose} onClick={toggle} className={cx('close')} />
          </div>
          <div className={cx('message-container')}>
            <div className={cx('messages')}>
              <Messages />
            </div>
          </div>
          <div className={cx('action')}>
            <textarea type='text' placeholder='Bạn muốn hỏi gì?' />
            <div className={cx('action-send')}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default FloatingButton
