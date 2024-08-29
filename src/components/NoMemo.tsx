import {useState} from "react";
import NonMemoComponent from "./NonMemoComponent.tsx";

const NoMemo = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')

    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="border-2 border-gray bg-gray-200 mt-3 mb-3"/>
            <NonMemoComponent count={count}/>
            <button className="border-3 p-1 bg-gray-300 text-xl mt-2 mb-2" onClick={() => setCount(count + 1)}>Increment count</button>
        </div>
    )
}
export default NoMemo