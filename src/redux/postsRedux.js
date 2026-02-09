// selectors
export const getAllPosts = state => state.posts.posts;
export const getPostById = (state, id) =>
  state.posts.posts.find(post => post.id === id);

// action types
const ADD_POST = 'app/posts/ADD_POST';
const EDIT_POST = 'app/posts/EDIT_POST';
const REMOVE_POST = 'app/posts/REMOVE_POST';

// action creators
export const addPost = payload => ({ type: ADD_POST, payload });
export const editPost = payload => ({ type: EDIT_POST, payload });
export const removePost = id => ({ type: REMOVE_POST, payload: id });

// initial state
const initialState = {
  posts: [
    {
      id: '1',
      title: 'Pierwszy post',
      author: 'Jan Kowalski',
      publishedDate: '2026-02-09',
      content: 'To jest treść pierwszego posta',
    },
    {
      id: '2',
      title: 'Drugi post',
      author: 'Anna Nowak',
      publishedDate: '2026-02-08',
      content: 'To jest treść drugiego posta',
    },
    {
      id: '3',
      title: 'Trzeci post',
      author: 'Alan Dziąsło',
      publishedDate: '2026-02-08',
      content: 'To jest treść trzeciego posta',
    },
  ],
};

// reducer
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

    case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.id ? action.payload : post
        ),
      };

    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
      };

    default:
      return state;
  }
};

export default postsReducer;
