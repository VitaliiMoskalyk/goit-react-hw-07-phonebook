import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./contacts-actions";


const initialState = {
    contacts: [],
    filter: ''
};


const contactsReducer = createReducer(initialState, (builder => {
    builder
        .addCase(actions.addContact, ({contacts}, action) => {
            contacts=contacts.push(action.payload)
         })
        .addCase(actions.deleteContact, (state, { payload }) => {
            
            state.contacts=state.contacts.filter((contact) => contact.id !== payload)
        })
        .addCase(actions.filterContacts, (state, {payload}) => {
            state.filter=payload
         })
    
}))


export default contactsReducer;