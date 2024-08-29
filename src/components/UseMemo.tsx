import { useMemo, useState } from 'react'

const UseMemo = () => {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(1)

    const computeExpensiveValue = (num: number) => {
        console.log('Початок дуже складного обчислення...')
        let value = num
        for (let i = 0; i < 1000000000; i++) {
            value += num
        }
        console.log('... закінчили')
        return value
    }

    const expensiveValue = useMemo(() => computeExpensiveValue(count), [count])

    return (
        <div>
            <p className="text-xl mt-2 mb-2">Дуже складне обчислення: {expensiveValue}</p>
            <p className="text-xl mt-2 mb-2">Просте значення (item): {item}</p>
            <button className="border-3 p-1 m-2 bg-gray-300"  onClick={() => setCount(count + 1)}>Збільшити count</button>
            <button className="border-3 p-1 m-2 bg-gray-300"  onClick={() => setItem(item + 1)}>Збільшити item</button>
        </div>
    )
}

export default UseMemo