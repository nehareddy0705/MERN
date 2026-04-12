import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import axios from "axios"

function EditEmp(){
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState : {errors},
        setValue,
    } = useForm()

    const {state} = useLocation()

    useEffect(() => {
        setValue("name",state.name)
        setValue("email",state.email)
        setValue("mobile",state.mobile)
        setValue("designation",state.designation)
        setValue("companyName",state.companyName)
        
    },[])

    const saveModifiedData = async(modifiedData) => {
        const res = await axios.put(`http://localhost:4000/emp-api/employee/${state._id}`,modifiedData)
        if(res.status == 200){
            navigate("/list")
        }
    }

    return(
        <div>
            <h1 className='text-4xl text-center p-4'>Edit Employee</h1>
            <form onSubmit={handleSubmit(saveModifiedData)} className = " max-w-md mx-auto mt-10">
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

                <button className = "text-gray-800 bg-gray-600 p-2 rounded-2xl" type = "submit">Save</button>
            </form>
        </div>
    )
}

export default EditEmp