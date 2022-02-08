import ContactItem from './ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';
import toast from 'react-hot-toast';
import { ConfirmDelete } from '../confirmDelete/ConfirmDelete';

const ContactList = () => {
  const contacts = useSelector(({ contacts }) => contacts);
  const filter = useSelector(({ filter }) => filter);
  const dispatch = useDispatch();

  const deleteContacts = id => {
    toast(
      <ConfirmDelete onClick={() => dispatch(actions.deleteContact(id))} />,
      {
        id: 'clipboard',
      }
    );
  };

  const findForFilter = () =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

  const visibleSearch = findForFilter();

  return (
    <>
      <h2>Contacts</h2>
      {visibleSearch.length > 0 ? (
        visibleSearch.map(contact => (
          <ol key={contact.id}>
            <ContactItem
              contact={contact}
              deleteFunction={() => deleteContacts(contact.id)}
            />
          </ol>
        ))
      ) : (
        <p>no contacts</p>
      )}
    </>
  );
};

export default ContactList;
