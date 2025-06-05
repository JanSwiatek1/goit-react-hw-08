import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './AuthForm.module.css';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .required('Required'),
});

export default function AuthForm({ onSubmit, isLoginForm }) {
  return (
    <Formik
      initialValues={{ email: '', password: '', name: '' }}
      validationSchema={isLoginForm 
        ? validationSchema 
        : validationSchema.concat(Yup.object({
            name: Yup.string().required('Required')
          }))
      }
      onSubmit={onSubmit}
    >
      <Form className={css.form}>
        {!isLoginForm && (
          <label className={css.label}>
            Name
            <Field className={css.input} type="text" name="name" />
            <ErrorMessage className={css.error} name="name" component="div" />
          </label>
        )}

        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" />
          <ErrorMessage className={css.error} name="email" component="div" />
        </label>

        <label className={css.label}>
          Password
          <Field className={css.input} type="password" name="password" />
          <ErrorMessage className={css.error} name="password" component="div" />
        </label>

        <button className={css.button} type="submit">
          {isLoginForm ? 'Login' : 'Register'}
        </button>
      </Form>
    </Formik>
  );
}