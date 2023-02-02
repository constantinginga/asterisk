import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const CategoryLink = styled(Link)`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0 0.25rem;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
