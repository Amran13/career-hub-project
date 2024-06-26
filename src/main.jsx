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
import Login from './components/Login'
import Register from './components/Register'
import AuthProvider from './components/AuthProvider'
import PrivateRoute from './components/PrivateRoute'
import Dashboard from './components/Dashboard'
import CreateApplication from './components/CreateApplication'
import Users from './components/Users'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/application',
        element: <Application></Application>,
        loader: () => fetch('http://localhost:5000/applications')
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('http://localhost:5000/applications')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/dashboard',
        element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>
      },
      {
        path : '/add-application',
        element : <CreateApplication></CreateApplication>
      },
      {
        path : '/users',
        element : <Users></Users>
      }
    ],

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
