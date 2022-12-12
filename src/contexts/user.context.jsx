import { createContext, useState, useEffect } from 'react';

import { onAuthStateChangedListener } from '../utils/firebase/firebase.utils';

// as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// component that will wrap around any component that needs access to the context
export const UserProvider = ({ children }) => {
  // run once, when the component mounts
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user);
    });

    return unsubscribe;
  }, []);
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
