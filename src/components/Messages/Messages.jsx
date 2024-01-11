import styles from './Messages.module.scss'
import classNames from 'classnames/bind'
import Message from './Message/Message'
import PropTypes from 'prop-types'

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
  return (
    <>
      {messages.map((item, index) => (
        <Message message={item} key={index} />
      ))}
    </>
  )
}

export default Messages

Messages.propTypes = {
  messages: PropTypes.array.isRequired
}
