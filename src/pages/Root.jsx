import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Layout/Header/Header'
import styles from './Root.module.scss'
import classNames from 'classnames/bind'
import Footer from '../components/Layout/Footer/Footer'
import FloatingButton from '~/components/FloatingButton/FloatingButton'

const cx = classNames.bind(styles)
function RootLayout() {
  const location = useLocation()
  const pathname = location.pathname
  return (
    <>
      <Header />
      <main className={cx('content')} id='modal'>
        <Outlet />
      </main>
      <FloatingButton />
      {pathname !== '/cart/checkout' && <Footer />}
    </>
  )
}

export default RootLayout
