import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reduser';
import {contactsApi} from '../utils/backend/contactsApi'


const store = configureStore({
  
  reducer: {
    filter:contactsReducer,
      [contactsApi.reducerPath]:contactsApi.reducer,
  },
  middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(contactsApi.middleware)
    // preloadedState:{contacts:[],filter:''}
});

// store.subscribe(() => {
  
//   saveState(
//     store.getState()
//   );
// });


export default store