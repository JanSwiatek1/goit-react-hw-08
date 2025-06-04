import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './contactForm.module.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.contacts);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(addContact(values)).unwrap();
      actions.resetForm();
      setSubmitError(null);
    } catch (error) {
      setSubmitError(error);
    }
  };

  return (
    <>
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

          <button
            className={css.button}
            type="submit"
            disabled={loading === 'pending'}
          >
            {loading === 'pending' ? 'Adding...' : 'Add contact'}
          </button>
        </Form>
      </Formik>
      {error && <p className={css.error}>Error: {error}</p>}
      {submitError && <p className={css.error}>Error: {submitError}</p>}
    </>
  );
}