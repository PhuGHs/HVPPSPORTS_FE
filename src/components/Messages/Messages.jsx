import styles from './Messages.module.scss'
import classNames from 'classnames/bind'
import Message from './Message/Message'
import PropTypes from 'prop-types'
import useScrollToBottom from '~/hooks/useScrollToBottom'
import { useEffect, useRef } from 'react'

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
  // const scrollRef = useScrollToBottom(messages)
  // return (
  //   <div className={cx('container')} ref={scrollRef}>
  //     {messages.map((item, index) => (
  //       <Message message={item} key={index} />
  //     ))}
  //   </div>
  // )

  const messageEndRef = useRef(null)

  useEffect(() => {
    if (messageEndRef) {
      // console.log('change end: ', messageEndRef.current.scro)
      messageEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  return (
    <div className={cx('container')}>
      {messages.map((item, index) => (
        <Message message={item} key={index} />
      ))}
      <div ref={messageEndRef}></div>
    </div>
  )
}

export default Messages

Messages.propTypes = {
  messages: PropTypes.array.isRequired
}
