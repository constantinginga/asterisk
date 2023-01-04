import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { selectCategories } from '../../store/categories/category.selector';

import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  const categories = useSelector(selectCategories);
  return (
    <Fragment>
      {Object.keys(categories).map((title) => (
        <CategoryPreview
          key={title}
          title={title}
          products={categories[title]}
        />
      ))}
    </Fragment>
  );
};

export default CategoriesPreview;
