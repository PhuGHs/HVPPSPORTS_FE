import { useState } from 'react'
import styles from './FloatingButton.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faMessage } from '@fortawesome/free-solid-svg-icons'
import Chatbot from '../Chat/ChatBot/ChatBot'
import ChatNormal from '../Chat/ChatNormal/ChatNormal'

const typeChat = {
  chatNormal: 'chatNormal',
  chatBot: 'chatBot'
}

const cx = classNames.bind(styles)
const FloatingButton = () => {
  // const [isChatVisible, setIsChatVisible] = useState(false)
  const [isChatNormalVisible, setIsChatNormalVisible] = useState(false)
  const [isChatBotVisible, setIsChatBotVisible] = useState(false)

  const handleOpenChat = (type) => {
    if (type === typeChat.chatNormal) {
      setIsChatNormalVisible(true)
    } else {
      setIsChatBotVisible(true)
    }
  }

  return (
    <div className={cx('container')}>
      {!(isChatBotVisible && isChatNormalVisible) && (
        <>
          <button onClick={() => handleOpenChat(typeChat.chatBot)} className={cx('float-button-chatbot')}>
            <FontAwesomeIcon icon={faMessage} />
          </button>
          <button onClick={() => handleOpenChat(typeChat.chatNormal)} className={cx('float-button-chat')}>
            <FontAwesomeIcon icon={faComments} />
          </button>
        </>
      )}
      {isChatBotVisible && <Chatbot setIsChatBotVisible={setIsChatBotVisible} />}

      {isChatNormalVisible && <ChatNormal setIsChatNormalVisible={setIsChatNormalVisible} />}
    </div>
  )
}

export default FloatingButton
