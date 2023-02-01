import styled from 'styled-components';

import { Wrapper } from '../../global.styles';

export const DirectoryContainer = styled(Wrapper)`
  margin: 2rem 0;
`;

export const DirectoryItems = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Title = styled.h2`
  margin-left: 7.5px;
  margin-bottom: 0.5rem;
`;
