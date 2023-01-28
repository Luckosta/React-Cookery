import React, { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import { getFilteredCategory } from '../../api';
import MealList from '../../components/MealList/MealList';
import Preloader from '../../components/Preloader/Preloader';

function Category() {
   const [meals, setMeals] = useState([]);
   const { name } = useParams();
   useEffect(() => {
      getFilteredCategory(name).then((data) => setMeals(data.meals));
   }, [name]);
   return <>{meals === null ? <Preloader /> : <MealList meals={meals} />}</>;
}

export default Category;
