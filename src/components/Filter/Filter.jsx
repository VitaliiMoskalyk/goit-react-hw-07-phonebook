import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';

const Filter = () => {
  const filter = useSelector(({ filter }) => filter);
  const dispatch = useDispatch();

  const filterChanger = ({ currentTarget }) => {
    const filterValue = currentTarget.value;
    dispatch(actions.filterContacts(filterValue));
  };
  return (
    <label htmlFor={filter}>
      <input
        type="text"
        placeholder="Find contact"
        value={filter}
        onChange={e => filterChanger(e)}
      />
    </label>
  );
};

export default Filter;
