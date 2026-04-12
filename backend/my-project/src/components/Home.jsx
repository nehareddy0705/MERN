import { useContext } from "react"
import { outerContextObj } from "../contexts/ContextProvider"
import {useCounterStore} from '../store/CounterStore'
function Home() {
    const {counter,changedCouter, counter1, changedCouter1} = useContext(outerContextObj)
    let newCounter = useCounterStore((state) => state.newCounter)
    let incrementCounter = useCounterStore((state) => state.incrementCounter)
    let decrementCounter = useCounterStore((state) => state.decrementCounter)
    let increment50 = useCounterStore((state) => state.increment50)
    let decrement20 = useCounterStore((state) => state.decrement20)
    return(
        <div>
            <h1 className="text-4xl">Counter : {counter}</h1>
            <button className="bg-pink-900 p-2" onClick={changedCouter}>Add</button>
            <h1 className="text-4xl">Counter : {counter1}</h1>
            <button className="bg-pink-900 p-2" onClick={changedCouter1}>Add</button>
            <h1 className="text-4xl mt-3">New Counter : {newCounter}</h1>
            <button className="bg-blue-800 p-2 m-3" onClick={incrementCounter}>incrementCounter</button>
            <button className="bg-red-800 p-2 m-3" onClick={decrementCounter}>decrementCounter</button>
            <button className="bg-blue-800 p-2 m-3" onClick={increment50}>increment50</button>
            <button className="bg-red-800 p-2 m-3" onClick={decrement20}>decrement20</button>
        </div>
    )
}

export default Home