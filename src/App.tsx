import UseCallback from "./components/UseCallback.tsx";
import UseMemo from "./components/UseMemo.tsx";
import Memo from "./components/Memo.tsx";
import NoMemo from "./components/NoMemo.tsx";
const App = () => {
    return (
        <div>
            <h1 className=" text-2xl text-center">Оптимізація React-додатків через мемоізацію</h1>
            <div className="border-y-4 flex flex-col items-center justify-center p-3 m-5">
                <h2 className="text-xl text-center">UseCallback</h2>
                <UseCallback/>
            </div>

            <div className="border-y-4 flex flex-col items-center justify-center p-3 m-5">
                <h2 className="text-xl text-center">UseMemo</h2>
                <UseMemo/>
            </div>
            <div className="border-y-4 flex flex-col items-center justify-center p-3 m-5">
                <h2 className="text-xl text-center">Memo</h2>
                <Memo/>
            </div>
            <div className="border-y-4 flex flex-col items-center justify-center p-3 m-5">
                <h2 className="text-xl text-center">NoMemo</h2>
                <NoMemo/>
            </div>
        </div>
    )
}

export default App