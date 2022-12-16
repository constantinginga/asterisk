import { createContext, useState, useEffect } from 'react';

import {
  //addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from '../utils/firebase/firebase.utils.js';

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});

  // fire only once
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategories(categoryMap);
    };
    getCategoriesMap();
  }, []);
  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
