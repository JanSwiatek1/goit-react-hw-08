import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import css from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(/^[0-9-]+$/, 'Invalid phone number')
    .min(7, 'Too Short!')
    .required('Required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, actions) => {
    if (contacts.some(contact => contact.name === values.name)) {
      alert(`${values.name} is already in contacts!`);
      return;
    }
    
    dispatch(addContact(values));
    actions.resetForm();
  };
//o
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="div" />
        </label>

        <label className={css.label}>
          Number
          <Field className={css.input} type="tel" name="number" />
          <ErrorMessage className={css.error} name="number" component="div" />
        </label>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

