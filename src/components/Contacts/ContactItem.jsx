import propTypes from 'prop-types';
import defaultImage from '../images/default.png';
import {
  ItemWrapper,
  Image,
  Name,
  Number,
  FlexContact,
  Button,
} from './contactIte.styled';

const ContactItem = ({ contact, deleteFunction }) => {
  const { id, name, phone, avatar = defaultImage } = contact;

  return (
    <ItemWrapper>
      <Image src={avatar} alt={name} />
      <FlexContact>
        <Name>{name}</Name>
        <Number>{phone}</Number>
      </FlexContact>
      <Button type="button" onClick={() => deleteFunction(id)}>
        X
      </Button>
    </ItemWrapper>
  );
};

ContactItem.propTypes = {
  contact: propTypes.object.isRequired,
  deleteFunction: propTypes.func.isRequired,
};
export default ContactItem;
