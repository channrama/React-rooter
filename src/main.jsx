import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './componenets/layout/layout.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './componenets/Home/Home.jsx'
import Service from './componenets/service/Service.jsx'
const router=createBrowserRouter([
  {path:"/",element:<Layout/>,
  children:[{path:"",element:<Home/>},
  {path:"service",element:<Service/>},
  {path:"abc"}

]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}/>
  </React.StrictMode>,
)
