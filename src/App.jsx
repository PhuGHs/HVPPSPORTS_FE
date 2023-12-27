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
import SignIn from './pages/Authentication/SignIn/SignIn'
import AuthLayout from './pages/Authentication/AuthLayout'
import SignUp from './pages/Authentication/SignUp/SignUp'
import ForgotPassword from './pages/Authentication/ForgotPassword/ForgotPassword'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

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
      { path: '/products/:id', element: <ProductDetails /> },
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'signin',
        element: <SignIn />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />
      }
    ]
  }
])

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false
    }
  }
})

function App() {
  return (
    <CartContext.Provider value={[]}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
          <ScrollToTop />
        </RouterProvider>
      </QueryClientProvider>
    </CartContext.Provider>
  )
}

export default App
