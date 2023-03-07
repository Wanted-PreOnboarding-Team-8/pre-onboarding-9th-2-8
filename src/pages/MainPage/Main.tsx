import { getMockDatas } from '@/api/mockData';
import { useCallback, useEffect, useState } from 'react';
import MainCard from '@/components/main/MainCard';
import { IProduct } from './types';

const Main = () => {
  const [mockDatas, setMockDatas] = useState<IProduct[]>([]);

  const LoadMockDatas = useCallback(() => {
    getMockDatas().then((res) => setMockDatas(res.data));
  }, []);

  useEffect(() => {
    LoadMockDatas();
  }, [LoadMockDatas]);

  return (
    <>
      {mockDatas.map((product) => {
        return <MainCard key={product.idx} product={product} />;
      })}
    </>
  );
};

export default Main;
