import React from 'react';
import CategoryItem from '../CategoryItem/CategoryItem';
import styles from './CategoryList.module.css';
function CategoryList(props) {
   const { catalog = [] } = props;

   return (
      <div className={styles.list}>
         {catalog.map((element) => (
            <CategoryItem key={element.idCategory} {...element} />
         ))}
      </div>
   );
}

export default CategoryList;
