import{Routes, Route} from 'react-router-dom';
import Appetizers from './Pages/Appetizers/Appetizers';
import Desserts from './Pages/Desserts/Desserts';
import MainCourses from './Pages/MainCourses/MainCourses';
import HomePage from'./Pages/HomePage'
import RecipeUpdate from'./Pages/RecipeUpdate'
import AddRecipe from'./Pages/AddRecipe'
import Recipe from './Pages/RecipData'
import './App.css'

function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/desserts" element={<Desserts/>} />
        <Route path='/maincourses' element={<MainCourses/>} />
        <Route path="/appetizers" element={<Appetizers/>} />
        <Route path="/addrecipe" element={<AddRecipe/>} />
        <Route path="/recipe/:id" element={<Recipe/>} />
        <Route path="/recipe/:id/update" element={<RecipeUpdate/>} />
    </Routes>
    </>
  )
}

export default App

