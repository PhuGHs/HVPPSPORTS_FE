import { createPortal } from 'react-dom'
import styles from './ReviewModal.module.scss'
import classNames from 'classnames/bind'
import { motion } from 'framer-motion'

const cx = classNames.bind(styles)
export default function ReviewModal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className={cx('backdrop')} onClick={onClose} />
      <motion.dialog
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        open
        className={cx('modal')}
      >
        <p className={cx('header')}>{title}</p>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('detail')
  )
}
