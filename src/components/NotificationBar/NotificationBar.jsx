import { useContext, useEffect } from 'react'
import NotificationContext from '~/store/notification-context'
import classNames from 'classnames/bind'
import styles from './NotificationBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)
const NotificationBar = () => {
  const notificationCtx = useContext(NotificationContext)
  useEffect(() => {
    const timeInterval = setTimeout(() => {
      notificationCtx.clear()
    }, 3000)
    return () => clearTimeout(timeInterval)
  }, [notificationCtx])
  return (
    notificationCtx.notification !== null && (
      <div className={cx('container')}>
        {notificationCtx.notification === 'success' && (
          <div className={cx('success')}>
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
        )}
        {notificationCtx.notification === 'error' && (
          <div className={cx('error')}>
            <FontAwesomeIcon icon={faExclamationCircle} />
          </div>
        )}
        <p> {notificationCtx.notificationText} </p>
      </div>
    )
  )
}
export default NotificationBar
