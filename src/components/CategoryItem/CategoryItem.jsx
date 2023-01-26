import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CategoryItem.module.css'
function CategoryItem(props) {
   const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
      props;
   return (
      <div id={idCategory} className={classNames(styles.card,'card')}>
         <div className='card-image'>
            <span><img src={strCategoryThumb} alt={strCategory} /></span>
         </div>
         <div className='card-content'>
            <span className={classNames(styles.title,'card-title black-text')}>{strCategory}</span>
            <p>{strCategoryDescription.slice(0, 60)}...</p>
         </div>
         <div className={classNames(styles.bottom,'card-action')}>
            <Link to={`/category/:${idCategory}`} className='btn'>
					Watch category
				</Link>
         </div>
      </div>
   );
}

export default CategoryItem;
