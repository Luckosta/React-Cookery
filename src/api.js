import { API_URL } from './config';

export const getMealById = async (meailId) => {
   const resp = await fetch(API_URL + 'lookup.php?i=' + meailId);
   return await resp.json();
};

export const getAllCategories = async () => {
   const resp = await fetch(API_URL + 'categories.php');
	
   return await resp.json();
};


export const getFilteredCategory = async (categoryName) => {
   const resp = await fetch(API_URL + 'filter.php?c=Seafood' + categoryName);
   return await resp.json();
};
