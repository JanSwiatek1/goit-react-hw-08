// import css from './Contact.module.css';

export default function Contact({ contact, onDelete }) {
  return (
    <div>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button
        type="button"
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
}