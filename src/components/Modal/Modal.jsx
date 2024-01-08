import { createPortal } from 'react-dom'
import styles from './Modal.module.scss'
import classNames from 'classnames/bind'
import { motion } from 'framer-motion'

const cx = classNames.bind(styles)
export default function Modal({ title, children, onClose, className }) {
  return createPortal(
    <>
      <div className={cx('backdrop')} onClick={onClose} />
      <motion.dialog
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        open
        className={cx('modal', className)}
      >
        <p>{title}</p>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  )
}
