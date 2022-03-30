import { useNavigate } from 'react-router-dom';

const PrivateRoute = () => {
  const navigate = useNavigate();

  if (!localStorage.getItem('x-token'.token)) {
    navigate('/login');
  }

  return true;
};

export default PrivateRoute;
