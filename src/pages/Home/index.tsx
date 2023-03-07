import routerMeta from '@/router/routerMeta';
import { Navigate } from 'react-router-dom';

const Home = () => {
  return <Navigate to={routerMeta.Main.path} replace={true} />;
};

export default Home;
