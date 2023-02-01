import React, { useEffect, useState } from 'react';
import { getAllCategories } from '../../api';
import CategoryList from '../../components/CategoryList/CategoryList';
import Preloader from '../../components/Preloader/Preloader';
import Search from '../../components/Search/Search';
import { useLocation, useSearchParams } from 'react-router-dom';

function Home() {
   const [catalog, setCatalog] = useState([]);
   const [filteredCatalog, setFilteredCatalog] = useState([]);
   const [value, setValue] = useState('');

   const { search } = useLocation();
   const [searchParams, setSearchParams] = useSearchParams();
   const searchValue = searchParams.get('category') || '';

   const handleSearch = (str) => {
      setFilteredCatalog(
         catalog.filter((el) =>
            el.strCategory.toLowerCase().includes(str.toLowerCase())
         )
      );
   };

   useEffect(() => {
      getAllCategories().then((data) => {
         setCatalog(data.categories);
         setFilteredCatalog(
            search
               ? data.categories.filter((item) =>
                    item.strCategory
                       .toLowerCase()
                       .includes(searchValue.toLowerCase())
                 )
               : data.categories
         );
      });
      setSearchParams({category: value});
     
   }, [value]);

   return (
      <>
         <Search cb={handleSearch} value={value} setValue={setValue} />
         {catalog.length ? (
            <CategoryList catalog={filteredCatalog} />
         ) : (
            <Preloader />
         )}
      </>
   );
}

export default Home;
