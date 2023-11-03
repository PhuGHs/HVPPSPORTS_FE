import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import RootLayout from './pages/Root'
import AccountPage from './pages/Account/AccountPage'
import CartPage from './pages/Cart/CartPage'
import { CartContext } from './store/cart-context'
import CategoryPage from './pages/Categories/CategoryPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/account', element: <AccountPage /> },
      { path: '/cart', element: <CartPage /> },
      { path: '/', element: <HomePage /> },
      { path: '/categories/:type', element: <CategoryPage /> }
    ]
  }
])

function App() {
  return (
    <CartContext.Provider value={[]}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  )
}

export default App
