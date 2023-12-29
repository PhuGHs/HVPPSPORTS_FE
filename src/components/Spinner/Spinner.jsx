import classNames from 'classnames/bind'
import styles from './Spinner.module.scss'

const cx = classNames.bind(styles)
const Spinner = () => {
  return (
    <div className={cx('spinner-container')}>
      <div className={cx('loading-spinner')}></div>
    </div>
  )
}

export default Spinner
