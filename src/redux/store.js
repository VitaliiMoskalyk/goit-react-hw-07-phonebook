import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reduser';
import { loadState,saveState } from 'utils/localStorage/load_push_State';

const store = configureStore({
  devTools:true,
    reducer: contactsReducer,
    preloadedState:{contacts:loadState(),filter:''}
});

store.subscribe(() => {
  
  saveState(
    store.getState()
  );
});


export default store