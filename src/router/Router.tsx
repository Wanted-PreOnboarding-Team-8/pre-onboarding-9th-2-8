import routerMeta from './routerMeta';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const lazyImport = (pageName: string) =>
  lazy(() => import(`../pages/${pageName}`));

const assignedRouter = Object.keys(routerMeta).map((componentKey: string) => {
  return {
    Component: lazyImport(componentKey),
    props: routerMeta[componentKey],
  };
});

const Router = () => {
  return (
    <Routes>
      {assignedRouter.map(({ Component, props }: any) => (
        <Route
          key={props.path}
          path={props.path}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Component />
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};

export default Router;
