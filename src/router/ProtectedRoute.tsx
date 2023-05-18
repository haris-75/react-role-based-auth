import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../utils/api';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate('/signin');
    }
  }, [navigate]);
  return (
    <div className='flex fixed top-32 left-32 w-full'>
      <div className='px-4 py-2 w-[70%] max-h-[85vh] overflow-auto'>
        <div className='ml-40 max-w-[70%] mb-8'>{children}</div>
      </div>
    </div>
  );
};

export default ProtectedRoute;
