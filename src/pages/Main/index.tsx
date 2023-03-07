import { useState, useCallback, useEffect } from 'react';
import { getProductsItem } from '@/api/getProductsItem';
import { IProducts } from './types';
import ProductItem from '@/components/main/ProductItem';

const MainPage = () => {
  const [products, setProducts] = useState<IProducts[]>([]);

  const getItems = useCallback(() => {
    getProductsItem().then((res) => setProducts(res.data));
  }, []);

  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <div>
      <div style={{ display: 'flex' }}>
        {products.map((product) => {
          return <ProductItem key={product.idx} product={product} />;
        })}
      </div>
    </div>
  );
};

export default MainPage;
