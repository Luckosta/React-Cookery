import React from 'react';
import MealItem from '../MealItem/MealItem';
import styles from './MealList.module.css'

function MealList(props) {
	const {meals} = props
   return <div className={styles.list}>
		{
			meals.map(meal => <MealItem key={meal.idMeal} {...meal}/>)
		}
	</div>;
}

export default MealList;
