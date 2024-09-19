import React from "react"
import logo from "./logo.svg"
import "./App.css"
import MyButton from "./components/MyButton"
import MyForm from "./components/MyForm"
import Login from "./components/Login"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      {/* <MyButton/> */}
      {/* <MyForm/> */}
      {/*<Login/>*/}
      <h1>Header</h1>
      <Outlet />
    </>
  )
}

export default App
