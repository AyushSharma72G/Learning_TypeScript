import { useState } from 'react'

function Counter() {

  const [num, setNum] = useState<number>(0)

  const ChangeCount = (a: number, op: string): any => {
    if (op === "-") {
      setNum((prev) => prev - 1);
    }
    else {
      setNum((prev) => prev + 1);
    }

  }

  return (
    <>
      <div className="card" style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => { ChangeCount(num, "-") }}>minus</button>
        <div>the count is {num}</div>
        <button onClick={() => { ChangeCount(num, "+") }}> plus</button>
      </div>

    </>
  )
}

export default Counter
