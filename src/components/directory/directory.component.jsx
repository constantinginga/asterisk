import { DirectoryContainer } from './directory.styles';
import DirectoryItem from '../directory-item/directory-item.component';

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((item) => (
        <DirectoryItem key={item.id} item={item} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
