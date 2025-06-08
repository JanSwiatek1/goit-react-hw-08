import { useDispatch } from 'react-redux';
import AuthForm from '../../components/AuthForm/AuthForm';
import { register } from '../../redux/auth/authOperations';

export default function RegisterPage() {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(register({
      name: values.name,
      email: values.email,
      password: values.password
    }));
  };

  return (
    <div>
      <h2>Register</h2>
      <AuthForm onSubmit={handleSubmit} isLoginForm={false} />
    </div>
  );
}