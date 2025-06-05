import { useDispatch } from 'react-redux';
import AuthForm from '../../components/AuthForm/AuthForm';
import { logIn } from '../../redux/auth/authOperations';

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = (credentials) => {
    dispatch(logIn(credentials));
  };

  return (
    <div>
      <h2>Login</h2>
      <AuthForm onSubmit={handleSubmit} isLoginForm={true} />
    </div>
  );
}