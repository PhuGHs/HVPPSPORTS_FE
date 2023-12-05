/* eslint-disable react/prop-types */
import styles from './Message.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
const Message = ({ message }) => {
  return (
    <div className={cx(message.IsCustomerSend ? 'message-container' : 'message-container-admin')}>
      <div className={cx(message.IsCustomerSend ? 'message' : 'message-admin')}>
        <p>{message.content}</p>
      </div>
    </div>
  )
}

export default Message