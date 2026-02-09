import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Card, Button, Modal } from 'react-bootstrap';
import { getPostById, removePost } from '../../redux/postsRedux';
import { useState } from 'react';

const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const post = useSelector(state => getPostById(state, id));

  // stan do obsługi modala
  const [showModal, setShowModal] = useState(false);

  // jeśli post nie istnieje → wracamy na stronę główną
  if (!post) {
    return <Navigate to="/" />;
  }

  const handleDelete = () => {
    dispatch(removePost(post.id));
    setShowModal(false);
  };

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          {/* HEADER POSTA */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Card.Title>{post.title}</Card.Title>

            <div>
              <Button
                variant="outline-primary"
                className="me-2"
                onClick={() => navigate(`/post/edit/${post.id}`)}
              >
                Edit
              </Button>

              <Button
                variant="outline-danger"
                onClick={() => setShowModal(true)}
              >
                Delete
              </Button>
            </div>
          </div>

          {/* META */}
          <Card.Subtitle className="mb-3 text-muted">
            Author: {post.author} | Published: {post.publishedDate}
          </Card.Subtitle>

          {/* TREŚĆ */}
          <Card.Text>{post.content}</Card.Text>
        </Card.Body>
      </Card>

      {/* MODAL */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Do you really want to delete this post?
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>

          <Button variant="danger" onClick={handleDelete}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Post;
