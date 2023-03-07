import { getAllTravelProduct } from '@/api/travelProduct';
import { useState, useEffect } from 'react';
import { ITravelProduct } from '@/interface/global';

const Main = () => {
  const [products, setProducts] = useState<ITravelProduct[]>([]);

  useEffect(() => {
    getAllTravelProduct().then((res) => setProducts(res.data));
  }, []);

  return (
    <>
      {products.map((ele: ITravelProduct) => {
        return (
          <div key={ele.idx}>
            {ele.name} :==:==: {ele.description}
          </div>
        );
      })}
    </>
  );
};

export default Main;
