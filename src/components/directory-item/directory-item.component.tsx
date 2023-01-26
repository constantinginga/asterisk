import { FC, useCallback } from 'react';

import { useNavigate } from 'react-router-dom';

import { DirectoryCategory } from '../directory/directory.component';

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles';

type DirectoryItemProps = {
  item: DirectoryCategory;
};

const DirectoryItem: FC<DirectoryItemProps> = ({
  item: { imageUrl, title, route },
}) => {
  const navigate = useNavigate();
  const onNavigateHandler = useCallback(
    () => navigate(route),
    [route, navigate]
  );

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
