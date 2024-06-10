import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Ower from './component/ower.jsx';
import Navbar from './component/navbar.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './component/home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '',
        element: <App />,
      },
    ],
  },
  {
    path: '/ower',
    element: <Navbar />,
    children: [
      {
        path: '',
        element: <Ower />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
