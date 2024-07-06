import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Accounts from './components/accounts/Accounts.jsx'
import PrivacyPolicy from './components/accounts/PrivacyPolicy.jsx'

const router = createHashRouter([
  {
    path : "/",
    element : <Home/>
  },
  {
    path: '/accounts',
    element : <Accounts/>
  },
  {
    path: "/accounts/privacypolicy",
    element: <PrivacyPolicy/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
