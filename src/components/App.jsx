import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './Contacts/ContactList';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../redux/contacts/contacts-actions';
import { ConfirmDelete } from '../components/confirmDelete/ConfirmDelete';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onSubmitForm = data => {
    const contactName = data.name;
    const normolizeData = contactName.toLowerCase();
    contacts.find(contact => contact.name.toLowerCase() === normolizeData)
      ? toast.error(`${contactName} is already in contacts`)
      : dispatch(actions.addContact(data));
  };

  const findForFilter = () =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

  const filterChanger = ({ currentTarget }) => {
    const filterValue = currentTarget.value;
    dispatch(actions.filterContacts(filterValue));
  };

  const deleteContacts = id => {
    toast(
      <ConfirmDelete onClick={() => dispatch(actions.deleteContact(id))} />,
      {
        id: 'clipboard',
      }
    );
  };

  const visibleSearch = findForFilter();

  return (
    <section>
      <Toaster position="top-left" reverseOrder={false} />
      <div className="form-wrapper">
        <h1>Phonebook</h1>
        <Form onSubmit={onSubmitForm} />
        <Filter searchValue={filter} finder={filterChanger} />
      </div>
      <ContactList contacts={visibleSearch} deleteFunction2={deleteContacts} />
    </section>
  );
};
