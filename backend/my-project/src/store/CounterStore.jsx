import{create} from 'zustand'
export const useCounterStore = create((set) => ({
    newCounter : 0,
    user:{name:'neha',email:'neha@gmail.com',age:18},
    modifyUser : () => set({...user,name:'neha reddy',age:19}),

    incrementCounter : ()=>set(state => ({newCounter:state.newCounter+1})),
    decrementCounter : ()=>set(state => ({newCounter:state.newCounter-1})),
    increment50 : () => set(state => ({newCounter:state.newCounter+50})),
    decrement20 : () => set(state => ({newCounter:state.newCounter-20})),
    reset : () => set({newCounter:0})
}))