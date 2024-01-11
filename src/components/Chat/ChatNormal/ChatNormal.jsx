import { faClose, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import styles from './ChatNormal.module.scss'
import Messages from '~/components/Messages/Messages'

const cx = classNames.bind(styles)
export default function ChatNormal({ setIsChatNormalVisible }) {
  return (
    <div className={cx('chat-container')}>
      <div className={cx('header')}>
        <p>Hỗ trợ trực tuyến</p>
        <FontAwesomeIcon icon={faClose} onClick={() => setIsChatNormalVisible(false)} className={cx('close')} />
      </div>
      <div className={cx('message-container')}>
        <div className={cx('messages')}>{/* <Messages /> */}</div>
      </div>
      <div className={cx('action')}>
        <textarea type='text' placeholder='Bạn muốn hỏi gì?' />
        <div className={cx('action-send')}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </div>
      </div>
    </div>
  )
}
