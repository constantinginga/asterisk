import styled from 'styled-components';

import { Wrapper } from '../../global.styles';

export const CategoryContainer = styled(Wrapper)`
  margin: 2rem 0;
`;

export const ProductCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
  }
`;

export const Title = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
`;
