import {useNavigate} from 'react-router-dom';
import dessertsImage from '../assets/desserts.png';
import appetizersImage from '../assets/appetizers.png';
import mainCoursesImage from '../assets/main-courses.png';




function HomePage() {

    const navigate = useNavigate()

  return (
    <>
      <div className="homepage">
        <h1>Recipe Book</h1>
        <h2>So What Do You Want To Cook Today?</h2>
        <div>
          <img src={appetizersImage} onClick={() => navigate("/appetizers")} ></img>
          <img src={mainCoursesImage} onClick={() => navigate("/maincourses")} ></img>
          <img src={dessertsImage} onClick={() => navigate("/desserts")} ></img>

        </div>
        <button onClick={() => navigate("/addrecipe")}>Add New Recipe</button>
      </div>
    </>
  );
}

export default HomePage;
