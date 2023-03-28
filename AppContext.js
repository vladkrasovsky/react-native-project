import { createContext } from 'react';

export const AppContext = createContext({
  isAuth: false,
  setIsAuth: auth => {},
});
