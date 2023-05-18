import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import SignIn from '../components/SignIn';
import Home from '../components/Home';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path='/'
        element={<SignIn />}
      />
      <Route
        path='/signin'
        element={<SignIn />}
      />
      <Route
        path='/home'
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
