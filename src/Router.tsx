import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Main from './pages/MainPage/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
