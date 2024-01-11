/* eslint-disable react/prop-types */
import styles from './Message.module.scss'
import classNames from 'classnames/bind'
import ModalImage from 'react-modal-image'

const cx = classNames.bind(styles)
const Message = ({ message }) => {
  return (
    <>
      <div className={cx(message.isCustomerSend ? 'container' : 'container-admin')}>
        <div className={cx(message.isCustomerSend ? 'message-container' : 'message-container-admin')}>
          <div className={cx(message.isCustomerSend ? 'message' : 'message-admin')}>
            <p>{message.content}</p>
          </div>
        </div>
        <div className={cx(message.isCustomerSend ? 'message-container' : 'message-container-admin')}>
          {message.media && (
            <ModalImage small={message.media} large={message.media} imageBackgroundColor='transparent' alt='image' />
          )}
        </div>
      </div>
    </>
  )
}

export default Message
