import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import RootLayout from './pages/Root'
import AccountPage from './pages/Account/AccountPage'
import CartPage from './pages/Cart/CartPage'
import { CartContext } from './store/cart-context'
import CategoryPage from './pages/Categories/CategoryPage'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import AccountInfo from './pages/Account/AccountInfo/AccountInfo'
import AddressPage from './pages/Account/Address/AddressPage'
import MyOrder from './pages/Account/MyOrder/MyOrder'
import MyReviews from './pages/Account/MyReviews/MyReviews'
import VoucherWallet from './pages/Account/VoucherWallet/VoucherWallet'
import OrderDetails from './pages/Account/MyOrder/OrderDetails/OrderDetails'
import ScrollToTop from './components/ScrollToTop'
import Checkout from './pages/Checkout/Checkout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/account',
        element: <AccountPage />,
        children: [
          {
            index: true,
            element: <Navigate to='/account/info' />
          },
          {
            path: 'info',
            element: <AccountInfo />
          },
          {
            path: 'address',
            element: <AddressPage />
          },
          {
            path: 'my-orders',
            element: <MyOrder />
          },
          {
            path: 'my-orders/:id',
            element: <OrderDetails />
          },
          {
            path: 'my-reviews',
            element: <MyReviews />
          },
          {
            path: 'voucher-wallet',
            element: <VoucherWallet />
          }
        ]
      },
      { path: '/cart', element: <CartPage /> },
      { path: '/cart/checkout', element: <Checkout /> },
      { path: '/', element: <HomePage /> },
      { path: '/categories/:type', element: <CategoryPage /> },
      { path: '/products/:id', element: <ProductDetails /> }
    ]
  }
])

function App() {
  return (
    <CartContext.Provider value={[]}>
      <RouterProvider router={router}>
        <ScrollToTop />
      </RouterProvider>
    </CartContext.Provider>
  )
}

export default App
