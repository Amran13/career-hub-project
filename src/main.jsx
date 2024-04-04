import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './components/Main.jsx'
import Home from './components/Home.jsx'
import Blog from './components/Blog.jsx'
import JobDetails from './components/JobDetails.jsx'
import Application from './components/Application.jsx'
import NotFound from './components/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement : <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/application',
        element: <Application></Application>,
        loader : () => fetch('/jobs.json')
      },
      {
        path : '/blog',
        element : <Blog></Blog>
      },
      {
        path : '/job/:id',
        element : <JobDetails></JobDetails>,
        loader : () => fetch('/jobs.json')
      }
    ],
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
