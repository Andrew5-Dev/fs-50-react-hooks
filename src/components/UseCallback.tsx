import { useCallback, useEffect, useState } from 'react'

const UseCallback = () => {
    const [count, setCount] = useState(0)

    const handleClick = useCallback(() => {
        console.log('Виклик функції handleClick')
        setCount((prevState) => prevState + 1)
    }, [])

    useEffect(() => {
        console.log('handleClick перестворено')
    }, [handleClick])

    return (
        <div>
            <p className="text-xl mt-2 mb-2">Count: {count}</p>
            <button onClick={handleClick} className="border-3 p-1 bg-gray-300" >Increment</button>
        </div>
    )
}

export default UseCallback