import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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

  const handleContentChange = value => {
    setPost({ ...post, content: value });
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
          value={post.title}
          onChange={handleChange}
        />

        <Form.Control
          className="mb-3"
          name="author"
          placeholder="Author"
          value={post.author}
          onChange={handleChange}
        />

        <Form.Control
          className="mb-3"
          name="publishedDate"
          type="date"
          value={post.publishedDate}
          onChange={handleChange}
        />

        <div className="mb-3">
          <label className="form-label">Content</label>
          <ReactQuill
            theme="snow"
            value={post.content}
            onChange={handleContentChange}
          />
        </div>

        <Button type="submit" className="mt-3">
          Add post
        </Button>
      </Form>
    </Container>
  );
};

export default AddPost;
