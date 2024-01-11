import styles from './Messages.module.scss'
import classNames from 'classnames/bind'
import Message from './Message/Message'
import PropTypes from 'prop-types'
import useScrollToBottom from '~/hooks/useScrollToBottom'

const list = [
  {
    customerId: '123',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec vehicula neque.',
    IsCustomerSend: true
  },
  {
    customerId: '123',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec vehicula neque.',
    IsCustomerSend: false
  },
  {
    customerId: '123',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec vehicula neque.',
    IsCustomerSend: false
  },
  {
    customerId: '123',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec vehicula neque.',
    IsCustomerSend: false
  },
  {
    customerId: '123',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec vehicula neque.',
    IsCustomerSend: false
  },
  {
    customerId: '123',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec vehicula neque.',
    IsCustomerSend: true
  }
]

const cx = classNames.bind(styles)
const Messages = ({ messages }) => {
  const scrollRef = useScrollToBottom(messages)
  return (
    <div className={cx('container')} ref={scrollRef}>
      {messages.map((item, index) => (
        <Message message={item} key={index} />
      ))}
    </div>
  )
}

export default Messages

Messages.propTypes = {
  messages: PropTypes.array.isRequired
}
