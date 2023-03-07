import { useEffect } from 'react';
import MainCard from '@/components/main/MainCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsData } from '@/store/modules/apiReducer';
import { AppDispatch, RootState } from '@/store';

const Main = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProductsData());
  }, [dispatch]);

  const { productsList, isLoading, error } = useSelector(
    (state: RootState) => state.api,
  );

  return (
    <>
      {productsList.map((product) => {
        return <MainCard key={product.idx} product={product} />;
      })}
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </>
  );
};

export default Main;
