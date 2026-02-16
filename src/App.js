import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/views/Header';
import Footer from './components/views/Footer';

import Home from './components/pages/Home';
import Post from './components/pages/Post';
import AddPost from './components/features/AddPost';
import EditPost from './components/features/EditPost';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Categories from './components/pages/Categories';
import Category from './components/pages/Category';




const App = () => {
  return (
    <Container>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/add" element={<AddPost />} />
        <Route path="/post/edit/:id" element={<EditPost />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:name" element={<Category />} />
      </Routes>

      <Footer />
    </Container>
  );
};

export default App;

