import './directory.styles.scss';
import DirectoryItem from '../directory-item/directory-item.component';

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((item) => (
        <DirectoryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Directory;
