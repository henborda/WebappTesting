import { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const decrement = () => setCount(count => count - 1)
    const increment = () => setCount(count => count + 1)

    return (
        <div>
            <p>Count is: {count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
        </div>
    )
}