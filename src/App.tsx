import React from "react"
import logo from "./logo.svg"
import "./App.css"
import MyButton from "./components/MyButton"
import MyForm from "./components/MyForm"
import Login from "./components/Login"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"

function App() {
  return (
    <>
      {/* <MyButton/> */}
      {/* <MyForm/> */}
      {/*<Login/>*/}
      <Header />
      <Outlet />
    </>
  )
}

export default App
