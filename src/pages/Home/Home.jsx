import React, { useEffect, useState } from 'react';
import { getAllCategories } from '../../api';
import CategoryList from '../../components/CategoryList/CategoryList';
import Preloader from '../../components/Preloader/Preloader';

function Home() {
   const [catalog, setCatalog] = useState([]);

   useEffect(() => {
		getAllCategories()
		.then(data => setCatalog(data.categories))
	}, []);

   return <>
		{
			catalog.length 
			? (<CategoryList catalog={catalog} />)
			: <Preloader />
		}
	</>;
}

export default Home;
