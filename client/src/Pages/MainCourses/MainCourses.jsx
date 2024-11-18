import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'

function MainCourses() {   

  const navigate = useNavigate() 

  const [mainCourses, setmainCourses] = useState([]);
  const RECIPE_URL = 'http://127.0.0.1:3000/recipes'

  const getmainCourses = async () =>{
      const {data} = await axios.get(RECIPE_URL)      
      const mainCourses = data.filter((mainCourse)=> mainCourse.category == "Main Course")            
      setmainCourses(mainCourses);
  }

  useEffect(()=>{
    getmainCourses();
  },[])

      return (
      <>
      <h1>Main Courses</h1>
      {
        mainCourses.map((mainCourse)=>{
          return(
            <h2 onClick={()=>navigate(`/recipe/${mainCourse._id}`)} key={mainCourse._id}>{mainCourse.name}</h2>
          )
        })
      }
      <button style={{marginTop:'8%'}} onClick={()=>navigate('/')}>Back To Home Page</button>
      </>
    )
  }
  
  export default MainCourses