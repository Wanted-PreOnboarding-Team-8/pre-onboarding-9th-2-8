import { useState, useCallback, useEffect } from 'react';
import { getProductsItem } from '@/api/getProductsItem';
import { IProductsInterface } from './types';

const Main = () => {
  const [products, setProducts] = useState<IProductsInterface[]>([]);

  const getItems = useCallback(() => {
    getProductsItem().then((res) => setProducts(res.data));
  }, []);

  useEffect(() => {
    getItems();
  }, [getItems]);
  return (
    <div>
      <div style={{ display: 'flex' }}>
        {products.map((product) => (
          <div key={product.idx}>
            <img src={product.mainImage} alt={product.name} />
            <p>{product.idx}</p>
            <p>{product.name}</p>
            <p>{product.price}원</p>
            <p>{product.spaceCategory}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
