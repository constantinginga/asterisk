import { useSelector } from 'react-redux';

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/category.selector';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spinner.component';

import { CategoriesPreviewContainer } from './categories-preview.styles';

const CategoriesPreview = () => {
  const categories = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <CategoriesPreviewContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categories).map((title) => (
          <CategoryPreview
            key={title}
            title={title}
            products={categories[title]}
          />
        ))
      )}
    </CategoriesPreviewContainer>
  );
};

export default CategoriesPreview;
