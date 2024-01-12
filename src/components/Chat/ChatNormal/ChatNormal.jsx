/* eslint-disable react/prop-types */
import { faClose, faImage, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import styles from './ChatNormal.module.scss'
import Messages from '~/components/Messages/Messages'
import { useContext, useEffect, useState } from 'react'
import { ChatApi } from '~/api/chat.api'
import { useInput } from '~/hooks/useInput'
import { UserContext } from '~/store/user-context'
import { Helper } from '~/utils/helper'
import { HubConnectionBuilder } from '@microsoft/signalr'

const cx = classNames.bind(styles)
export default function ChatNormal({ setIsChatNormalVisible }) {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [file, setFile] = useState(null)
  const { user } = useContext(UserContext)
  const [connection, setConnection] = useState(null)

  const handleSendMessage = async () => {
    const body = {
      customerID: user.id,
      content: value,
      media: file ?? '',
      isCustomerSend: true
    }
    try {
      await ChatApi.sendMessage(body)
      setIsLoading(true)
      setValue('')
    } catch (error) {
      console.error(error)
    }
  }

  const handleFileChange = async (event) => {
    if (event.target.files[0] && Helper.validateFile(event.target.files[0])) {
      const base64Image = await Helper.readAsBase64(event.target.files[0])
      setFile(base64Image.substring('data:image/png;base64,'.length))
    }
  }

  useEffect(() => {
    const connect = new HubConnectionBuilder()
      .withUrl('https://localhost:7030/chathub')
      .withAutomaticReconnect()
      .build()

    setConnection(connect)
  }, [])

  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then(() => {
          console.log('SignalR connected')
        })
        .catch((error) => {
          console.error('Error starting SignalR connection:', error)
        })
      // connection.invoke('Connect', user.id)

      connection.on('ReceiveMessage', () => {
        setIsLoading(true)
      })
    }

    const fetch = async () => {
      try {
        const data = await ChatApi.getMessages(user.id)

        setMessages(data)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
        setIsLoading(false)
      }
    }

    if (isLoading) {
      fetch()
    }
  }, [connection, isLoading])

  const { value, handleInputChange, handleInputBlur, setValue } = useInput('', () => true)

  return (
    <div className={cx('chat-container')}>
      <div className={cx('header')}>
        <p>Hỗ trợ trực tuyến</p>
        <FontAwesomeIcon icon={faClose} onClick={() => setIsChatNormalVisible(false)} className={cx('close')} />
      </div>
      <div className={cx('message-container')}>
        <div className={cx('messages')}>{messages && <Messages messages={messages} />}</div>
      </div>
      <div className={cx('action')}>
        <div className={cx('action-img')}>
          <label htmlFor='input-file'>
            <FontAwesomeIcon icon={faImage} />
          </label>
          <input type='file' id='input-file' onChange={handleFileChange} />
        </div>
        <textarea
          type='text'
          placeholder='Bạn muốn hỏi gì?'
          value={value}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        <div className={cx('action-send')} onClick={handleSendMessage}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </div>
      </div>
    </div>
  )
}
