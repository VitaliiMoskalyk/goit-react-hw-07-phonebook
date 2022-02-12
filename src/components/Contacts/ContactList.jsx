import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { ConfirmDelete } from '../confirmDelete/ConfirmDelete';
import Filter from 'components/Filter';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../utils/backend/contactsApi';

const ContactList = () => {
  const { data, error, isFetching } = useGetContactsQuery('users');
  const filter = useSelector(({ filter }) => filter);

  const [deleteContact] = useDeleteContactMutation();

  const deleteContacts = id => {
    toast(<ConfirmDelete onClick={() => deleteContact(id)} />, {
      id: 'clipboard',
    });
  };

  const findForFilter = () =>
    data.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <>
      <h2>Contacts</h2>
      {isFetching && <p>Loading</p>}
      {error && <p>/{error.status}</p>}
      {data && (
        <>
          <Filter />
          {findForFilter().length === 0 && <p>you don`t have contacts</p>}
          <ul>
            {findForFilter().map(contact => (
              <li key={contact.createdAt}>
                <ContactItem
                  contact={contact}
                  deleteFunction={deleteContacts}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default ContactList;
