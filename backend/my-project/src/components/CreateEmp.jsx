import {useForm} from 'react-hook-form'
import { useState } from 'react'
import {useNavigate} from 'react-router'

function CreateEmp(){
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState : {errors},
    } = useForm()
    const onFormSubmit = async(newEmpObj) => {
        try{
            setLoading(true)
            let res = await fetch("http://localhost:4000/emp-api/employee",{
                method: "POST",
                headers: {"content-type" : "application/json"},
                body : JSON.stringify(newEmpObj)
            })
            if(res.status == 201){
                navigate("/list")
            }
            else{
                let errorRes = await res.json()
                console.log(errorRes)
                throw new Error(errorRes.reason)
            }
            }catch(err){
                setError(err.message)
            }finally{
                setLoading(false)
            }
    }
    if (loading) {
        return <p className="text-center text-4xl">Loading....</p>;
    }
    if (error) {
        return <p className="text-red-500 text-center text-3xl">{error}</p>;
    }
    return(
        <div>
            <h1 className='text-4xl text-center p-4'>Create Employee</h1>
            <form className = " max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
                <input type = "text" placeholder='Enter Name'
                {...register('name')}
                className='border-gray-700 border-2 w-full mb-6'/>

                <input type = "text" placeholder='Enter Email'
                {...register('email')}
                className='border-gray-700 border-2 w-full mb-6'/>

                <input type = "number" placeholder='Enter mobile number'
                {...register('mobile')}
                className='border-gray-700 border-2 w-full mb-6'/>

                <input type = "text" placeholder='Enter Designation'
                {...register('designation')}
                className='border-gray-700 border-2 w-full mb-6'/>

                <input type = "text" placeholder='Enter Company name'
                {...register('companyName')}
                className='border-gray-700 border-2 w-full mb-6'/>

                <button className = "text-gray-800 bg-gray-600 p-2 rounded-2xl" type = "submit">Submit</button>
            </form>
        </div>
    )
}

export default CreateEmp