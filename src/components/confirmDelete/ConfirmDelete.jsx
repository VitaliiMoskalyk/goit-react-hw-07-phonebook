import { Button } from 'components/Contacts/contactIte.styled';

export const ConfirmDelete = ({ onClick }) => {
  return (
    <span>
      Delete?{' '}
      <Button type="button" onClick={onClick}>
        Y
      </Button>
    </span>
  );
};
