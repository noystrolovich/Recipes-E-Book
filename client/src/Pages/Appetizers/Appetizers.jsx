import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'
function Appetizers() {   

  const navigate = useNavigate() 

  const [appetizers, setAppetizers] = useState([]);
  const RECIPE_URL = 'http://127.0.0.1:3000/recipes'

  const getAppetizers = async () =>{
      const {data} = await axios.get(RECIPE_URL)
      const appetizers = data.filter((appetizer)=> appetizer.category == "Appetizer")
      setAppetizers(appetizers);
  }

  useEffect(()=>{
    getAppetizers();
  },[])

      return (
      <>
      <h1>Appetizers</h1>

      {
        appetizers.map((appetizer)=>{
          return(
            <h2 onClick={()=>navigate(`/recipe/${appetizer._id}`)} key={appetizer._id}>{appetizer.name}</h2>
          )
        })
      }
      <button style={{marginTop:'15%'}} onClick={()=>navigate('/')}>Back To Home Page</button>
      </>
    )
  }
  
  export default Appetizers
