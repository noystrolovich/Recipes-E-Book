import { useState,useEffect } from "react"
import axios from "axios"
import {useNavigate} from 'react-router-dom';


function AddRecipe() {
    
    const navigate = useNavigate()
    const RECIPE_URL = 'http://127.0.0.1:3000/recipes'


    const [obj,setObj] = useState({
        name : "",
        ingredients : '',
        instructions : "",
        preparationTime : 0,
        category : ""
      })

      const addNewRecipe = (e) =>{
        e.preventDefault()
        const ekeys = Object.keys(obj)
        ekeys.forEach(k => {
          if(obj[k] == ""){
            alert(`The property ${k} must have a value`);
          throw ''
          }
        });
        const recipe = obj;         
        recipe.ingredients = recipe.ingredients.split(",");
        axios.post(`${RECIPE_URL}`,recipe)
        navigate(`/`)
      }

    return (
<>
<h1>Add New Recipe</h1>
<form>
<label>Recipe Name:</label>  <input onChange={(e)=> setObj({...obj,name:e.target.value})}></input><br/><br/>
        <label>Ingredients:</label>  <input onChange={(e)=> setObj({...obj,ingredients:e.target.value})}></input><br/><br/>
        <label>Instructions:</label>   <input onChange={(e)=> setObj({...obj,instructions:e.target.value})}></input><br/><br/>
        <label>Preparation Time:</label>    <input onChange={(e)=> setObj({...obj,preparationTime:+e.target.value})}></input><br/><br/>
        <label>Category:</label>    <select onChange={(e)=>setObj({...obj,category:e.target.value})}>
                                    <option value="">Select Category</option>
                                    {["Appetizer","Dessert","Main Course"].map((category) => {
                                    return (
                                      <option key={category}>
                                      {category}
                                      </option>
                                    )})}
                                    </select><br/><br/>
        <button on onClick={addNewRecipe}>ADD NEW RECIPE</button>
</form>
<button onClick={()=>navigate('/')}>Back To Home Page</button>

</>
    )
  }
  
  export default AddRecipe