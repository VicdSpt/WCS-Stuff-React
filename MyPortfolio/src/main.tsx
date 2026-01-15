import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router";

import './index.css'
import App from './App.tsx'

import Home from './components/Home';
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Hobbies from './pages/Hobbies'
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    element: <App />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/skills",
        element: <Skills />
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/hobbies",
        element: <Hobbies />,
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
]);

const rootElement = document.getElementById("root")

if(rootElement != null){
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  )
}
