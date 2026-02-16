import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../redux/postsRedux';
import { Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Category = () => {
  const { name } = useParams();
  const posts = useSelector(getAllPosts);

  // filtrujemy posty po kategorii
  const filteredPosts = posts.filter(
    post => post.category.toLowerCase() === name
  );

  return (
    <Container className="mt-4">
      <h1>Category: {name}</h1>

      {filteredPosts.length === 0 ? (
        <p>No posts in this category.</p>
      ) : (
        filteredPosts.map(post => (
          <Card key={post.id} className="mb-3">
            <Card.Body>
              <Card.Title>
                <Link to={`/post/${post.id}`}>
                  {post.title}
                </Link>
              </Card.Title>
              <Card.Subtitle className="text-muted">
                Author: {post.author}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        ))
      )}
    </Container>
  );
};

export default Category;
