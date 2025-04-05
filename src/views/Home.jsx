
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import StudentCard from "./../components/StudentCard";
import AddIcon from "./../assets/add-user.png";

const Home = () => {
  const [students, setStudents] = useState([]);

  const loadStudents = async() => {
    const response = await axios.get("https://my-server-8e3c.onrender.com/students")
    setStudents(response.data.data)
  }

  useEffect(()=>{
    loadStudents();
  }, []);

  return (
    <div>
      <h1 className='text-center text-6xl my-4'>All Students</h1>
      <div>
        {students.map((studObj, i) => {
          const {id, name, city} = studObj;
          return (
            <StudentCard key={i} id={id} name={name} city={city} loadStudents={loadStudents}/>
          )
        })}
      </div>

      <Link to="./Add">
        <img 
          src={AddIcon} 
          alt="Add User" 
          className="h-10 fixed botton-5 right-5  top-130 cursor-pointer" 
        />
      </Link>
      
    </div>
  )
}

export default Home;


