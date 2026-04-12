import { createContext, useState } from "react";
export const outerContextObj = createContext()

function ContextProvider({children}){
    const [ counter,setCounter] = useState(10)
    const [ counter1,setCounter1] = useState(10)

    const changedCounter = () => {
        setCounter(counter+1)
    }
    const changedCounter1 = () => {
        setCounter(counter+1)
    }
    return(
        <outerContextObj.Provider value = {{counter, changedCounter, counter1, changedCounter1}}>
            {children}
        </outerContextObj.Provider>
    )
}

export default ContextProvider