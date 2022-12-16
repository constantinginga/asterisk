import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';

import CategoryPreview from '../../components/category-preview/category-preview.component';

import './shop.styles.scss';

const Shop = () => {
  const { categories } = useContext(CategoriesContext);
  return (
    <div className="shop-container">
      {Object.keys(categories).map((title) => (
        <CategoryPreview
          key={title}
          title={title}
          products={categories[title]}
        />
      ))}
    </div>
  );
};

export default Shop;
