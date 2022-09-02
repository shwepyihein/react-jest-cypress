import React from "react"
import ReactLoading from "react-loading"

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <ReactLoading type={"spin"} color="text-red-300" />
    </div>
  )
}

export default Loading
