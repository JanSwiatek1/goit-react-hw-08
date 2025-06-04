import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';
import css from './contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.contact}>
      <p className={css.name}>{contact.name}</p>
      <p className={css.number}>{contact.phone || contact.number || 'No number'}</p>
      <button
        className={css.button}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}