import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./contacts-actions";

const contactsReducer = createReducer('', {
    [actions.filterContacts]:(state,action)=>state=action.payload
})


export default contactsReducer;