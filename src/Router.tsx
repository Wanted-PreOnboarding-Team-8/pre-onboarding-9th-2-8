import routerMeta from '@/lib/routerMeta';
import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { IRouter } from '@/interface/main';

const lazyImport = (pageName: string) =>
  lazy(() => import(`@/pages/${pageName}`));

const assignedRouter = Object.keys(routerMeta).map((componentKey: string) => {
  return {
    Component: lazyImport(componentKey),
    props: routerMeta[componentKey],
  };
});

const Router = () => (
  <Routes>
    {assignedRouter.map(({ Component, props }: IRouter) => (
      <Route
        key={props.path}
        path={props.path}
        element={
          <Suspense fallback={<>Loading...</>}>
            <Component />
          </Suspense>
        }
      />
    ))}
    <Route
      path="/*"
      element={<Navigate to={routerMeta.MainPage.path} replace={true} />}
    />
  </Routes>
);

export default Router;
