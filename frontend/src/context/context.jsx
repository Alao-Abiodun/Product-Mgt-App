import { createContext, useReducer, useContext, useState } from 'react';
import { bookmarkReducer } from './reducer';

const UserContext = createContext();

const Context = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider
      value={{ state, dispatch, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useBookmarkState = () => {
  return useContext(UserContext);
};
export default Context;
