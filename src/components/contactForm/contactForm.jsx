import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import styles from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(/^\d{3}-\d{3}-\d{4}$/, 'Invalid phone number format (XXX-XXX-XXXX)')
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, actions) => {
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${values.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          Name
          <Field className={styles.input} type="text" name="name" />
          <ErrorMessage className={styles.error} name="name" component="div" />
        </label>

        <label className={styles.label}>
          Number
          <Field className={styles.input} type="tel" name="number" />
          <ErrorMessage className={styles.error} name="number" component="div" />
        </label>

        <button className={styles.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};