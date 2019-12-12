import React, {createContext} from 'react';
import useArticles from "./hooks/useArticles";
import useAuth from './hooks/useAuth';
import useComments from './hooks/useComments';
import useElection from './hooks/useElection';
import useMedia from './hooks/useMedia';
import useForm from './hooks/useForm';

// context
const AppCtx = createContext ();

function AppProvider({children}) {
  let value = {
    useAuth: useAuth (),
    useArticles: useArticles (),
    useMedia: useMedia (),
    useComments,
    useElection,
    useForm
  };
  return (
    <AppCtx.Provider value={value}>
      {children}
    </AppCtx.Provider>
  )
}

export const useApp = () => React.useContext (AppCtx);

export default AppProvider
