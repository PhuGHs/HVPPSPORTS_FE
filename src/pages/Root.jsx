import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Layout/Header/Header'
import styles from './Root.module.scss'
import classNames from 'classnames/bind'
import Footer from '../components/Layout/Footer/Footer'

const cx = classNames.bind(styles)
function RootLayout() {
  const location = useLocation()
  const pathname = location.pathname
  return (
    <>
      <Header />
      <main className={cx('content')}>
        <Outlet />
      </main>
      {pathname !== '/cart/checkout' && <Footer />}
    </>
  )
}

export default RootLayout
