export const bookmarkReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOKMARK':
      return {
        ...state,
        bookmark: [...state.bookmark, { ...action.payload, qty: 1 }],
      };
    case 'REMOVE_BOOKMARK':
      return {
        ...state,
        bookmark: state.bookmark.filter((c) => c.id !== action.payload.id),
      };
    default:
      return state;
  }
};
