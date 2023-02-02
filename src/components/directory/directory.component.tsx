import { Link } from 'react-router-dom';

import {
  DirectoryContainer,
  HeaderContainer,
  DirectoryItems,
  Subtitle,
  HeaderTextContainer,
  HeaderImgContainer,
} from './directory.styles';
import DirectoryItem from '../directory-item/directory-item.component';

import Button from '../button/button.component';

import { ReactComponent as MainImg } from '../../assets/main.svg';

export type DirectoryCategory = {
  id: number;
  title: string;
  imageUrl: string;
  route: string;
};

const categories: DirectoryCategory[] = [
  {
    id: 1,
    title: 'hats',
    imageUrl: 'https://i.ibb.co/ZN240zC/image.png',
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/HXW18Jx/image.png',
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl:
      'https://i.ibb.co/Tr1V82n/sneakers-sustainability-voguebus-janine-abrenilla-jan-21-story.jpg',
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: 'https://i.ibb.co/Jvh8zWr/image.png',
    route: 'shop/womens',
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: 'https://i.ibb.co/MVWwTjC/image.png',
    route: 'shop/mens',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      <HeaderContainer>
        <HeaderTextContainer>
          <h1>
            Welcome to <span>Asterisk</span>! 👋
          </h1>
          <p>The one-stop shop for all your clothing needs.</p>
          <Link to={'/shop'}>
            <Button>Shop now</Button>
          </Link>
        </HeaderTextContainer>
        <HeaderImgContainer>
          <MainImg />
        </HeaderImgContainer>
      </HeaderContainer>
      <Subtitle>Shop by category</Subtitle>
      <DirectoryItems>
        {categories.map((item) => (
          <DirectoryItem key={item.id} item={item} />
        ))}
      </DirectoryItems>
    </DirectoryContainer>
  );
};

export default Directory;
