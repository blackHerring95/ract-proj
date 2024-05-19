import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App';
import ProjectList from './components/project-list';

const router = createBrowserRouter([
  {
    path:"/",
    element : <div>Hello...</div>
  },
  {
    path:"/projects",
    element : <ProjectList></ProjectList>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* add routing */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
