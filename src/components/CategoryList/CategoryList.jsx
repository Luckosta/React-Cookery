import React from 'react';
import CategoryItem from '../CategoryItem/CategoryItem';

function CategoryList(props) {
	const {catalog=[]} = props

   return <div className='list'>
	{
		catalog.map((element)=> <CategoryItem key={element.id} {...element}/>)
	}
	
	</div>;
}

export default CategoryList;
