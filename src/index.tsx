import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import Login from "./components/Login"
import Info from "./components/Info"
import Homepage from "./components/Homepage"

const router = createHashRouter(
  createRoutesFromElements(
    <Route
      path=""
      element={<App />}
    >
      <Route
        path="/"
        element={<Homepage />}
      ></Route>
      <Route
        path="login"
        element={<Login />}
      ></Route>
      <Route
        path="info"
        element={<Info />}
      />
    </Route>,
  ),
  { basename: "/type-potato" },
)

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
