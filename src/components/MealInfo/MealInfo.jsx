import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MealInfo.module.css';
function MealInfo(props) {
   const navigate = useNavigate();

   const {
      strMeal,
      strCategory,
      strArea,
      strInstructions,
      strMealThumb,
      strYoutube,
   } = props;

   return (
      <div className='container'>
         <h2>{strMeal}</h2>
         <h4>Country: {strArea}</h4>
         <img src={strMealThumb} alt={strMeal} style={{ maxWidth: '300px' }} />
         <p className={styles.recipe}>{strInstructions}</p>
         <a href={strYoutube}>video</a>
         <br />
         <button className='btn' onClick={() => navigate(-1)}>
            Go Back
         </button>
      </div>
   );
}

export default MealInfo;
