import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { editPost, getPostById } from '../../redux/postsRedux';
import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const EditPost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const post = useSelector(state => getPostById(state, id));
  const [editedPost, setEditedPost] = useState(post);

  if (!post) return <Navigate to="/" />;

  const handleChange = e => {
    setEditedPost({ ...editedPost, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editPost(editedPost));
    navigate(`/post/${id}`);
  };

  return (
    <Container className="mt-4">
      <h1>Edit post</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Control
          className="mb-3"
          name="title"
          value={editedPost.title}
          onChange={handleChange}
        />
        <Form.Control
          className="mb-3"
          name="author"
          value={editedPost.author}
          onChange={handleChange}
        />
        <Form.Control
          className="mb-3"
          type="date"
          name="publishedDate"
          value={editedPost.publishedDate}
          onChange={handleChange}
        />
        <Form.Control
          as="textarea"
          rows={5}
          name="content"
          value={editedPost.content}
          onChange={handleChange}
        />

        <Button type="submit" className="mt-3">
          Save changes
        </Button>
      </Form>
    </Container>
  );
};

export default EditPost;
