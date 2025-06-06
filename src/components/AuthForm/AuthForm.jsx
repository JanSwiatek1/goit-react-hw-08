import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './AuthForm.module.css';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Nieprawidłowy email')
    .required('Wymagane'),
  password: Yup.string()
    .min(6, 'Minimum 6 znaków')
    .required('Wymagane')
});

export default function AuthForm({ onSubmit, isLoginForm }) {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Email
          <Field 
            type="email" 
            name="email" 
            autoComplete="email"
            className={css.input}
          />
          <ErrorMessage name="email" component="div" className={css.error} />
        </label>

        <label className={css.label}>
          Hasło
          <Field
            type="password"
            name="password"
            autoComplete={isLoginForm ? "current-password" : "new-password"}
            className={css.input}
          />
          <ErrorMessage name="password" component="div" className={css.error} />
        </label>

        <button type="submit" className={css.button}>
          {isLoginForm ? 'Zaloguj się' : 'Zarejestruj się'}
        </button>
      </Form>
    </Formik>
  );
}