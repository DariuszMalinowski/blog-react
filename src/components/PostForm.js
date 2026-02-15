import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PostForm = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('TITLE:', title);
    console.log('CONTENT:', content);

    alert('Post zapisany (na razie w konsoli)');
  };

  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label>Title</label>
        <input 
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div style={{ marginTop: '20px' }}>
        <label>Content</label>
        <ReactQuill 
          theme="snow"
          value={content}
          onChange={setContent}
        />
      </div>

      <button 
        type="submit"
        style={{ marginTop: '20px' }}
      >
        Save Post
      </button>

    </form>
  );
};

export default PostForm;


