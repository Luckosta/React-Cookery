import { API_URL } from './config';

const getMealById = async (meailId) => {
   const resp = await fetch(API_URL + 'lookup.php?i=' + meailId);
   return await resp.json();
};

const getAllCategories = async () => {
   const resp = await fetch(API_URL + 'categories.php');
   return await resp.json();
};

const getFilteredCategory = async (catName) => {
   const resp = await fetch(API_URL + 'filter.php?c=' + catName);
   return await resp.json();
};

export { getMealById, getAllCategories, getFilteredCategory };
