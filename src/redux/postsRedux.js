// selectors (na razie puste)

// initial state z przykładowymi postami
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
      id: '2',
      title: 'Trzeci post',
      author: 'Darek Malina',
      publishedDate: '2026-02-09',
      content: 'To jest treść trzeciego posta',
    },
  ],
};

// reducer
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default postsReducer;
