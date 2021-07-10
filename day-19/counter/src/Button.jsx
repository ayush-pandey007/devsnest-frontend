import React from 'react'
import { useState } from 'react'

function Button() {
    const [count, setCount] = useState(0)
    return (
        <div className='counter'>
               <button type="button" onClick={() => setCount((count) => count + 1)}>
 {count}
          </button>
        </div>
    )
}

export default Button
