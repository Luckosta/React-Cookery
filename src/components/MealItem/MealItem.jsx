import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MealItem.module.css';

function MealItem(props) {
   const { idMeal, strMeal, strMealThumb } = props;

   return (
      <div id={idMeal} className={classNames(styles.card, 'card')}>
         <div className='card-image'>
            <span>
               <img src={strMealThumb} alt={strMeal} />
            </span>
         </div>
         <div className='card-content'>
            <span className={classNames(styles.title, 'card-title black-text')}>
               {strMeal}
            </span>
         </div>
         <div className={classNames(styles.bottom, 'card-action')}>
            <Link to={`/meal/${idMeal}`} className='btn'>
               Watch recipe
            </Link>
         </div>
      </div>
   );
}

export default MealItem;
