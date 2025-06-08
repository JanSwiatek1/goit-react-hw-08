import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './AuthForm.module.css';
import { register } from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';

const validationSchema = Yup.object().shape({
  name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Password too short!')
      .required('Required')
});

export default function AuthForm({ isLoginForm }) {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ Name:'', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(register(values));
      }}
    >
      <Form className={css.form}>
      <label className={css.label}>
          Name
          <Field 
            type="text" 
            name="name" 
            className={css.input}
          />
          <ErrorMessage name="name" component="div" />
          {/* {isLoginForm ? 'Zaloguj się' : 'Zarejestruj się'} */}
        </label>
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