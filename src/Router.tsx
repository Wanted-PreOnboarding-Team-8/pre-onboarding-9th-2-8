import { Spinner } from '@chakra-ui/react';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';

const Main = lazy(() => import('@/pages/Main'));
const Reservations = lazy(() => import('@/pages/Reservations'));

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Suspense
        fallback={
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        }
      >
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/main" />} />
            <Route path="/main" element={<Main />} />
            <Route path="/reservations" element={<Reservations />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
