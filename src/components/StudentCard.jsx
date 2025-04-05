
import React from "react";
import DeleteIcon from "./../assets/delete.png"
import EditIcon from "./../assets/edit.png"
import axios from "axios";
import toast, {Toaster} from "react-hot-toast" ;
import { Link } from "react-router";

function StudentCard({id, name, city, loadStudents}){

    const deleteStudent = async() =>{
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/students/${id}`);
        if(response.data.success){
            toast.success(response.data.message)
            loadStudents()
        }
        else{
            toast.error(response.data.message)
        }
    }

    return(
        <div className="border-2 border-gray-300 p-4 my-4 rounded-md shadow-md relative"> 
            <h2 className="text-2xl">
                {id} - {name}
            </h2>
            <p>{city}</p>
    
            <img src={DeleteIcon}
             alt="DeleteIcon" 
             className="h[30px] cursor-pointer absolute top-1 right-5"
             onClick={deleteStudent}
             />
    
            <Link to={`/Edit/${id}`}>
                <img src={EditIcon}
                alt="EditIcon" 
                className="h[20px] cursor-pointer absolute bottom-2 right-5"
                />
            </Link> 
    
             <Toaster/>
        </div>
        );
    }
export default StudentCard;
