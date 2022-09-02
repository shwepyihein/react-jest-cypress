import React from "react"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import UserList from "./pages/UserList"
import NotFound from "./pages/NotFound"
import UserUpdate from "./pages/UserUpdate"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/update/:id" element={<UserUpdate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
