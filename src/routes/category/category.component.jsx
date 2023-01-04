import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectCategories } from '../../store/categories/category.selector';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoryContainer, Title } from './category.styles';

const Category = () => {
  const { category } = useParams();
  const categories = useSelector(selectCategories);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
