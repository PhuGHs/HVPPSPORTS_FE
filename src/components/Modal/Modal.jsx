import { createPortal } from 'react-dom'
import styles from './Modal.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className={cx('backdrop')} onClick={onClose} />
      <dialog open className={cx('modal')}>
        <p>{title}</p>
        {children}
      </dialog>
    </>,
    document.getElementById('modal')
  )
}
