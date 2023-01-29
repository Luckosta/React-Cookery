import React from 'react';
import GoBackBtn from '../GoBackBtn/GoBackBtn';

import styles from './Recipe.module.css';
function Recipe(props) {
   const { strMeal, strArea, strInstructions, strMealThumb, strYoutube } =
      props;

   return (
      <div className='container'>
         <h2>{strMeal}</h2>
         {strArea && <h6>Country: {strArea}</h6>}
         <img src={strMealThumb} alt={strMeal} style={{ maxWidth: '100%' }} />
         <p className={styles.recipe}>{strInstructions}</p>
         <h5 className='center'>Ingredients</h5>
         <table className='centered highlight'>
            <thead>
               <tr>
                  <th>Ingredient</th>
                  <th>Measure</th>
               </tr>
              
            </thead>

            <tbody>
               {Object.keys(props).map((key) => {
                  if (key.includes('Ingredient') && props[key]) {
                     return (
                        <tr key={key}>
                           <td>{props[key]}</td>
                           <td>{props[`strMeasure${key.slice(13)}`]}</td>
                        </tr>
                     );
                  }
                  return null;
               })}
            </tbody>
         </table>
         <br />
         {strYoutube && (
            <div className='row'>
               <h5 className='center'>Video Recipe</h5>
               <iframe
                  src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}
                  title={strMealThumb}
                  allowFullScreen
                  className={styles.iframe}
               ></iframe>
            </div>
         )}
         <br />
         <GoBackBtn />
      </div>
   );
}

export default Recipe;
