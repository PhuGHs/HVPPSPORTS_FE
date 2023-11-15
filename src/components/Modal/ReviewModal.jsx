import { createPortal } from 'react-dom'
import styles from './ReviewModal.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
export default function ReviewModal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className={cx('backdrop')} onClick={onClose} />
      <dialog open className={cx('modal')}>
        <p className={cx('header')}>{title}</p>
        {children}
      </dialog>
    </>,
    document.getElementById('detail')
  )
}
