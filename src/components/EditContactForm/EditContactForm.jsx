import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/contactsOperations';
import css from './EditContactForm.module.css';
import toast from 'react-hot-toast';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

export default function EditContactForm({ contact, onClose }) {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(updateContact({ id: contact.id, ...values }))
      .unwrap()
      .then(() => {
        toast.success('Contact updated successfully');
        onClose();
      })
      .catch(() => toast.error('Failed to update contact'));
  };

  return (
    <Formik
      initialValues={{ name: contact.name, number: contact.number }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="div" />
        </label>

        <label className={css.label}>
          Phone
          <Field className={css.input} type="tel" name="number" />
          <ErrorMessage className={css.error} name="number" component="div" />
        </label>

        <div className={css.buttons}>
          <button className={css.button} type="submit">
            Save
          </button>
          <button 
            className={css.button} 
            type="button" 
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </Form>
    </Formik>
  );
}