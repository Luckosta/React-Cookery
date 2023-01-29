import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMealById } from '../../api';
import Recipe from '../Recipe/Recipe';
import Preloader from '../Preloader/Preloader';

function GetMealInfo() {
   const [mealData, setMealData] = useState([]);
   const { id } = useParams();
   useEffect(() => {
      getMealById(id).then((data) => setMealData(data.meals));
   }, [id]);

   return (
      <div>
         {mealData !== null ? (
            mealData.map((recipe) => <Recipe key={recipe.idMeal} {...recipe} />)
         ) : (
            <Preloader />
         )}
      </div>
   );
}

export default GetMealInfo;
