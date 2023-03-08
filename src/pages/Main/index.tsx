import { getAllTravelProduct } from '@/api/travelProduct';
import { useState, useEffect } from 'react';
import { ITravelProduct } from '@/interface/global';

import TravelProductList from '@/components/products/TravelProductList';

const Main = () => {
  const [products, setProducts] = useState<ITravelProduct[]>([]);

  useEffect(() => {
    getAllTravelProduct().then((res) => setProducts(res.data));
  }, []);

  return (
    <>
      <TravelProductList products={products} />
    </>
  );
};

export default Main;
