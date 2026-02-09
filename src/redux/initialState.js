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
      publishedDate: '2026-02-09',
      content: 'To jest treść drugiego posta',
    },
  ],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state; // NIE mutuj stanu!
  }
};

export default postsReducer;
