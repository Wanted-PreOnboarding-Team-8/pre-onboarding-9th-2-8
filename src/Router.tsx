import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './pages/Main';

const Router = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/main" />} />
    <Route path="/main" element={<Main />} />
  </Routes>
);

export default Router;
