import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter , BrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(
  [
    {
    path: "/",
    element: <app/>,
    children: [
      {
        path:"/",
        element: <Acceuil/>,
      },
      {
        path: "/menu",
        element:<Menu/>,
      }
    ]
  }
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = { router}/>
  </StrictMode>
)