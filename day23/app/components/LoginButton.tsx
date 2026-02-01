"use client"

import { BorderAll } from "@mui/icons-material"
import { colors } from "@mui/material"
import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ margin: "10px" }}>
    Count: {count} <br/>
    <button onClick={() => setCount(count + 1)} 
    style={{ border: "1px solid white", borderRadius: "7px" }}
    >
        add
    </button>

    </div>
  )
}
