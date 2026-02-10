import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: '',
    author: '',
    publishedDate: '',
    content: '',
  });

  const handleChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      addPost({
        ...post,
        id: Date.now().toString(),
      })
    );

    navigate('/');
  };

  return (
    <Container className="mt-4">
      <h1>Add post</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Control
          className="mb-3"
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <Form.Control
          className="mb-3"
          name="author"
          placeholder="Author"
          onChange={handleChange}
        />
        <Form.Control
          className="mb-3"
          name="publishedDate"
          type="date"
          onChange={handleChange}
        />
        <Form.Control
          as="textarea"
          rows={5}
          name="content"
          placeholder="Content"
          onChange={handleChange}
        />

        <Button type="submit" className="mt-3">
          Add post
        </Button>
      </Form>
    </Container>
  );
};

export default AddPost;
