import { Outlet } from 'react-router-dom'
import Header from '../components/Layout/Header/Header'
import styles from './Root.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
function RootLayout() {
  return (
    <>
      <Header />
      <main className={cx('content')}>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout
