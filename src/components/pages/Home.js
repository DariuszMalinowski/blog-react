import { useSelector } from 'react-redux';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../../redux/postsRedux';

const Home = () => {
  const posts = useSelector(getAllPosts);

  return (
    <Container className="mt-4">
      {/* Header strony */}
      <Row className="align-items-center mb-4">
        <Col>
          <h1>All posts</h1>
        </Col>
        <Col className="text-end">
          <Button as={Link} to="/post/add">
            Add post
          </Button>
        </Col>
      </Row>

      {/* GRID POSTÓW */}
      <Row>
        {posts.map(post => (
          <Col md={6} lg={4} key={post.id} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>

                <Card.Subtitle className="mb-2 text-muted">
                  {post.author} | {post.publishedDate}
                </Card.Subtitle>

                <Card.Text>
                  {post.content}
                </Card.Text>

                <Button as={Link} to={`/post/${post.id}`}>
                  Read more
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
