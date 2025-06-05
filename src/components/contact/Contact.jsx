import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import css from './Contact.module.css';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import EditContactForm from '../EditContactForm/EditContactForm';

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id))
      .unwrap()
      .then(() => toast.success('Contact deleted successfully'))
      .catch(() => toast.error('Failed to delete contact'));
  };

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  return (
    <div className={css.contact}>
      <div className={css.info}>
        <p className={css.name}>
          <span className={css.label}>Name:</span> {contact.name}
        </p>
        <p className={css.number}>
          <span className={css.label}>Phone:</span> {contact.number}
        </p>
      </div>
      
      <div className={css.buttons}>
        <button
          className={`${css.button} ${css.editButton}`}
          type="button"
          onClick={handleEdit}
        >
          Edit
        </button>
        
        <button
          className={`${css.button} ${css.deleteButton}`}
          type="button"
          onClick={() => setIsModalOpen(true)}
        >
          Delete
        </button>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className={css.modalContent}>
            <p>Are you sure you want to delete {contact.name}?</p>
            <div className={css.modalButtons}>
              <button 
                className={`${css.button} ${css.confirmButton}`}
                onClick={handleDelete}
              >
                Yes
              </button>
              <button 
                className={`${css.button} ${css.cancelButton}`}
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}

      {isEditModalOpen && (
        <Modal onClose={() => setIsEditModalOpen(false)}>
          <EditContactForm 
            contact={contact} 
            onClose={() => setIsEditModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
}