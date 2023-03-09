import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Loading from './components/Loading';

const Main = lazy(() => import('@/pages/Main'));
const Reservations = lazy(() => import('@/pages/Reservations'));

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Suspense fallback={<Loading text="페이지 로딩중..." />}>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/main" />} />
          <Route path="/main" element={<Main />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
