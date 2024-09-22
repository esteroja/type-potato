import { useState } from "react"
import "../Time.css"

export default function Time() {
  let time = new Date().toLocaleTimeString()

  const [ctime, setTime] = useState(time)
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString()
    setTime(time)
  }
  setInterval(UpdateTime)
  return (
    <div className="clockContainer">
      <div className="clock">{ctime}</div>
    </div>
  )
}
