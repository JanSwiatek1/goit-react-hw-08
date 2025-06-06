import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import { logIn } from '../../redux/auth/authOperations';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  console.log('Czy zalogowany?:', isLoggedIn); 

  // Automatyczne przekierowanie jeśli użytkownik jest już zalogowany
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/contacts');
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (credentials) => {
    try {
      await dispatch(logIn(credentials)).unwrap();
      toast.success('Logged in successfully');
      navigate('/contacts');
      console.log('Logowanie udane, przekierowuję...');
    } catch (error) {
      toast.error(
        error.payload || 
        'Login failed. Please check your email and password'
      );
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <AuthForm onSubmit={handleSubmit} isLoginForm={true} />
    </div>
  );
}