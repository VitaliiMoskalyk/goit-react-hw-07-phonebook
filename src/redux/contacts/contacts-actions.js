const { createAction } = require("@reduxjs/toolkit");

export const addContact = createAction('contacts/add_contact');
export const deleteContact = createAction('contacts/delete_contact');
export const filterContacts = createAction('contacts/filter_contacts');

