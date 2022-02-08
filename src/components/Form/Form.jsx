import { useState } from 'react';
import { nanoid } from 'nanoid';
import { FormWrapper, FormButton } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import * as actions from '../../redux/contacts/contacts-actions';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(({ contacts }) => contacts);

  const onSubmitForm = data => {
    const contactName = data.name;
    const normolizeData = contactName.toLowerCase();
    contacts.find(contact => contact.name.toLowerCase() === normolizeData)
      ? toast.error(`${contactName} is already in contacts`)
      : dispatch(actions.addContact(data));
  };

  const contactsAdder = evt => {
    evt.preventDefault();
    const newContact = generateContact(name, number);
    onSubmitForm(newContact);
    setName('');
    setNumber('');
  };

  const generateContact = (name, number) => {
    return { name, number, id: nanoid(4) };
  };
  return (
    <FormWrapper onSubmit={contactsAdder}>
      <label htmlFor={name}>
        <input
          value={name}
          type="text"
          autoComplete="off"
          placeholder="Ann Ferdinand"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={evt => setName(evt.target.value)}
        />
      </label>

      <label htmlFor={number}>
        <input
          value={number}
          onChange={evt => setNumber(evt.target.value)}
          type="tel"
          autoComplete="off"
          placeholder="+3805098765432"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <FormButton type="submit">+</FormButton>
    </FormWrapper>
  );
};

export default Form;
