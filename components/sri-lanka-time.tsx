"use client"

import { useEffect, useState } from "react"
import { Clock } from "lucide-react"

export function SriLankaTime() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      // Sri Lanka is UTC+5:30
      const options = {
        timeZone: "Asia/Colombo",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }

      const sriLankaTime = new Date().toLocaleTimeString("en-US", options)
      setTime(sriLankaTime)
    }

    // Update immediately
    updateTime()

    // Update every minute
    const interval = setInterval(updateTime, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center text-sm text-gray-600">
      <Clock size={16} className="mr-1" />
      <span>Sri Lanka: {time}</span>
    </div>
  )
}
