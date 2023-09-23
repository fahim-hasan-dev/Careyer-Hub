import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Hoom/Home';
import Error from './components/EooroPage/Error';
import Statistics from './components/Statistics/Statistics';
import Jobs from './components/ApplidJobs/Jobs';
import Blog from './components/Blogs/Blog';
import JobDetails from './components/jobdetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/applidJob",
        element:<Jobs></Jobs>,
        loader:()=>fetch('/public/jobs.json')
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path: '/job/:id',
        element:<JobDetails></JobDetails>,
        loader:()=>fetch('/public/jobs.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
