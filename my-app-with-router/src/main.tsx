
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App"

import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    element: <App />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/articles/:id",
        element: <Article />,
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
]);

const roolElement = document.getElementById("root")

if(roolElement != null){
  ReactDOM.createRoot(roolElement).render(
    <RouterProvider router={router} />
  )
}

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
