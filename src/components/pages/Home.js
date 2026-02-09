import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const posts = useSelector(state => state.posts.posts); // uwaga: state.posts.posts bo w Redux initialState mamy { posts: [...] }

  return (
    <Container className="mt-4">
      <h1 className="mb-4">All posts</h1>

      <Row>
        {posts.map(post => (
          <Col md={4} key={post.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <strong>Author:</strong> {post.author}<br />
                  <strong>Published:</strong> {post.publishedDate}
                </Card.Subtitle>
                <Card.Text>
                  {post.content.length > 100 ? post.content.slice(0, 100) + '...' : post.content}
                </Card.Text>
                <Button as={Link} to={`/post/${post.id}`} variant="primary">
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
