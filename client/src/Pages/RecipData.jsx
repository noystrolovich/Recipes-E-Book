import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom';


function RecipData() {
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

    const deleteRecipe = () => {
      axios.delete(`${RECIPE_URL}/${id}`)
      navigate(`/`)
    }

    useEffect(()=>{
      getRecipeById();
    },[])

    return (
    <>
    <h2>{recipe.name}</h2>
    <div  style={{textAlign:'left', width:'50%'}}>
    <h2>Ingredients</h2>
    <ul>
    {
      recipe.ingredients.map((ingredient)=>{
        return(
          <li key={recipe._id}>{ingredient}</li>
        )
      })
    }
    </ul>
    <h2>Instructions:</h2>
    {recipe.instructions}
    <h2>Preparation Time:</h2>
    {`${recipe.preparationTime} minutes`}
    <h2>Category:</h2>
    {recipe.category} <br/><br/>
    <button onClick={() => navigate(`/recipe/${id}/update`)}>UPDATE RECIPE</button>
    <button onClick={deleteRecipe}>DELETE RECIPE</button>
    </div>
    <button onClick={()=>navigate('/')}>Back To Home Page</button>
    </>
    )
  }
  
  export default RecipData