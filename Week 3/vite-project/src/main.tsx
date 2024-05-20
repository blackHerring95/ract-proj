import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import App from './App';
import ProjectList from './components/project-list';
import ProjectDetails from './components/project-details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello...</div>
  },
  {
    path: "/projects",
    element: <ProjectList></ProjectList>,
    children: [
      {
        //connection between this and project-details component
        path: ":projectId",
        element: <ProjectDetails />
      }
    ]
  },
  {
    path: "/authenticate",
    element: <div>Auth success!</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* add routing */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
