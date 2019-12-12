import React, {useState, createContext} from 'react';
import useArticles from "./hooks/useArticles";
import useAuth from './hooks/useAuth';
import useComments from './hooks/useComments';
import useElection from './hooks/useElection';
import useMedia from './hooks/useMedia';
import useForm from './hooks/useForm';
import Modal from './components/modals/Modal';
import FileDialog from './components/modals/FileDialog';
import Login from './components/modals/Login';
import Signup from './components/modals/Signup';

// context
const AppCtx = createContext ();

function AppProvider({children}) {
  // file dialog
  const [open, setOpen] = useState (false);
  const [fd, setFD] = useState (false);
  // pass directly to Ctx Provider
  let value = {
    selectFiles: async (max=1) => {
      return new Promise (async (resolve, reject) => {
        setOpen (true);
        setFD (() => () => {
          return (<FileDialog onDone={(files) => {setOpen (false); resolve (files)}} onClose={() => {reject ()}} max={max} />);
        });
      });
    },
    login: async () => {
      return new Promise (async (resolve, reject) => {
        setOpen (true);
        setFD (() => () => {
          return (<Login onDone={() => {setOpen (false); resolve ()}} onClose={()=>{reject ()}} />);
        });
      });
    },
    useAuth: useAuth (),
    useArticles: useArticles (),
    useMedia: useMedia (),
    useComments,
    useElection,
    useForm
  }

  window.selectFiles = value.selectFiles;
  return (
    <AppCtx.Provider value={value}>
      {children}
      <Modal isOpen={open} close={() => {setOpen (false)}}>
        {fd && fd ()}
      </Modal>
    </AppCtx.Provider>
  )
}

export const useApp = () => React.useContext (AppCtx);

export default AppProvider