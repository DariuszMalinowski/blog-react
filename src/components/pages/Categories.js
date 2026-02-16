import { useSelector } from 'react-redux';
import { getCategories } from '../../redux/postsRedux';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Categories = () => {
  const categories = useSelector(getCategories) || [];


  return (
    <Container className="mt-4">
      <h1>Categories</h1>

      <ul>
        {categories.map(cat => (
          <li key={cat}>
            <Link to={`/category/${cat.toLowerCase()}`}>
              {cat}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Categories;
