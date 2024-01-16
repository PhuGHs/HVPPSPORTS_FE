import { faClose, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import styles from './ChatBot.module.scss'
import Messages from '~/components/Messages/Messages'
import { useContext, useEffect, useRef, useState } from 'react'
import { ChatbotContext } from '~/store/chat-context'
import { useMutation } from '@tanstack/react-query'
import { ChatbotApi } from '~/api/chatbot.api'
import { UserContext } from '~/store/user-context'
import { Helper } from '~/utils/helper'

const cx = classNames.bind(styles)
export default function Chatbot({ setIsChatBotVisible }) {
  const textareaRef = useRef()
  // const messageEndRef = useRef(null)
  const { chatbotMessages, setChatbotMessages } = useContext(ChatbotContext)
  const { user } = useContext(UserContext)
  const [message, setMessage] = useState('')

  // useEffect(() => {
  //   if (messageEndRef) {
  //     // console.log('change end: ', messageEndRef.current.scro)
  //     messageEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  //   }
  // }, [chatbotMessages])

  const sendMessageMutation = useMutation({
    mutationFn: ChatbotApi.queryFromCustomer
  })

  // const
  const handleSubmit = async (event) => {
    event.preventDefault()

    await setChatbotMessages((prev) => [
      ...prev,
      {
        isCustomerSend: true,
        content: message
      }
    ])

    sendMessageMutation.mutate(
      {
        userId: user.id || Helper.generateRandomString(),
        userQuery: message
      },
      {
        onSuccess: (data) => {
          console.log('data chat', data)
          setChatbotMessages((prev) => [
            ...prev,
            {
              isCustomerSend: false,
              content: data.chatbotResponse
            }
          ])
        }
      }
    )

    setMessage('')
    textareaRef.current.focus()
  }

  const handleChangeInputText = (event) => {
    setMessage(event.target.value)
  }

  return (
    <div className={cx('chat-container')}>
      <div className={cx('header')}>
        <p>Trợ lý ảo</p>
        <FontAwesomeIcon icon={faClose} onClick={() => setIsChatBotVisible(false)} className={cx('close')} />
      </div>
      <div className={cx('message-container')}>
        <div className={cx('messages')}>
          <Messages messages={chatbotMessages} />
        </div>
        {/* <div ref={messageEndRef}>hello</div> */}
      </div>
      <form className={cx('action')} onSubmit={handleSubmit}>
        <textarea
          type='text'
          ref={textareaRef}
          value={message}
          placeholder='Bạn muốn hỏi gì?'
          onChange={handleChangeInputText}
        />
        <button className={cx('action-send')} type='submit'>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
    </div>
  )
}
