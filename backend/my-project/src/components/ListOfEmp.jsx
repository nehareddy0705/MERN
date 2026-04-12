import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function ListOfEmp(){
    const [emps, setEmps] = useState([]);
    const navigate = useNavigate()

    const goToEmp = (empObj) => {
        //navigate to /employee along with selected emp obj
        navigate("/employee", {state:empObj})
    }

    const goToEditEmp = (empObj) => {
        navigate("/edit-emp",{state:empObj})
    }

    const deleteEmp = async(id) => {
        let res = await axios.delete(`http://localhost:4000/emp-api/employee/${id}`)
        if(res.status == 200){
            getEmps()
        }
    }

    async function getEmps() {
      let res = await fetch("http://localhost:4000/emp-api/employee");
      if (res.status === 200) {
        let resObj = await res.json();
        console.log(resObj)
        setEmps(resObj.payload);
      } 
    }

    useEffect(() => {
        getEmps();
    }, []);
    return (
        <div>
        <h1 className="text-4xl text-center">List of Employees</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {emps.map((empObj) => (
            <div key={empObj._id} className=" bg-white p-5 text-center shadow-2xl">
                <p className="font-semibold">{empObj.name}</p>
                <p>{empObj.email}</p>
                <div className="flex justify-around ">
                    <button onClick={() => goToEmp(empObj)} className="bg-green-700 rounded-2xl p-2">View</button>
                    <button onClick={() => goToEditEmp(empObj)} className="bg-yellow-700 rounded-2xl p-2">Edit</button>
                    <button onClick={() => deleteEmp(empObj._id)} className="bg-red-500 rounded-2xl p-2">Delete</button>
                </div>
            </div>
            ))}
        </div>
    </div>
    )
}

export default ListOfEmp