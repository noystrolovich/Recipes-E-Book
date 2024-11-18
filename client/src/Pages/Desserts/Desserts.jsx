import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'

function Desserts() {   

  const navigate = useNavigate() 

  const [desserts, setDesserts] = useState([]);
  const RECIPE_URL = 'http://127.0.0.1:3000/recipes'

  const getDesserts = async () =>{
      const {data} = await axios.get(RECIPE_URL)      
      const desserts = data.filter((dessert)=> dessert.category == "Dessert")            
      setDesserts(desserts);
  }

  useEffect(()=>{
    getDesserts();
  },[])

      return (
      <>
      <h1>Desserts</h1>

      {
        desserts.map((dessert)=>{
          return(
            <h2 onClick={()=>navigate(`/recipe/${dessert._id}`)} key={dessert._id}>{dessert.name}</h2>
          )
        })
      }
      <button style={{marginTop:'15%'}} onClick={()=>navigate('/')}>Back To Home Page</button>
      </>
    )
  }
  
  export default Desserts
