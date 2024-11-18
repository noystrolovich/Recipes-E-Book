import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'

function RecipeUpdate() {
    const navigate = useNavigate()
    const {id} = useParams()

    const [recipe,setRecipe] = useState({
      name : "",
      ingredients : [],
      instructions : "",
      preparationTime : 0,
      category : ""
    })

    const RECIPE_URL = 'http://127.0.0.1:3000/recipes'

    const getRecipeById = async () =>{
      const {data} = await axios.get(`${RECIPE_URL}/${id}`)
      setRecipe(data)
    }

    useEffect(()=>{
        getRecipeById();
      },[])

    const updateRecipe = (e) => {
        e.preventDefault();
        axios.put(`${RECIPE_URL}/${id}`,recipe)
       // navigate(`/recipe/${id}`)
      }
    
  return (
    <>
    <div style={{border:'2px solid #B6C7AA',marginTop:'6%',backgroundColor:'#B6C7AA',padding:'30px'}}>
        <h2>Edit Recipe - {recipe.name}</h2><br/>
        <form style={{width:'',padding:'10px',justifyContent:'center',alignItems:'center'}} id="EditEmployee">
        <label>Recipe Name:</label>  <input value={recipe.name} onChange={(e)=> setRecipe({...recipe,name:e.target.value})}></input><br/><br/>
        <label>Ingredients:</label>   <input value={recipe.ingredients} onChange={(e)=> setRecipe({...recipe,ingredients:e.target.value})}></input><br/><br/>
        <label>Instructions:</label>  <input value={recipe.instructions} onChange={(e)=> setRecipe({...recipe,instructions:e.target.value})}></input><br/><br/>
        <label>Preparation Time:</label> <input value={recipe.preparationTime} onChange={(e)=> setRecipe({...recipe,preparationTime:e.target.value})}></input><br/><br/>
        <label>category:</label>    <select value={recipe.category} onChange={(e)=>setRecipe({...recipe,category:e.target.value})}>
                                    <option value="">Select Category:</option>
                                    {["Appetizer","Dessert","Main Course"].map((category) => {
                                    return (
                                      <option key={category}>
                                      {category}
                                      </option>
                                    )})}
                                    </select><br/><br/>
        <button className='whiteButton' onClick={updateRecipe}>UPDATE RECIPE</button><br/>
        </form>
        </div>
        <br/>
        <button style={{marginTop:'30px'}} onClick={()=>navigate(`/recipe/${id}`)}>Back To Recipe Page</button>
    </>
  );
}

export default RecipeUpdate;
