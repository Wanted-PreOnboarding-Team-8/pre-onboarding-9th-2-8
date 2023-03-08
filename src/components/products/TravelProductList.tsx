import { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

import { ITravelProduct } from '@/interface/global';
import SelectProductBtn from './SelectProductBtn';

type TravelProductListType = {
  products: ITravelProduct[];
};

const TravelProductList = (products: TravelProductListType) => {
  return (
    <TableContainer>
      <Table>
        <FilterBar />
        <ProductGrid products={products.products} />
      </Table>
    </TableContainer>
  );
};

const FilterBar = () => {
  return (
    <Thead>
      <Tr>
        <Th></Th>
        <Th></Th>
        <Th></Th>
        <Th bg="red" color={'white'}>
          가격 필터
        </Th>
        <Th bg="blue" color={'white'}>
          지역 필터
        </Th>
      </Tr>
    </Thead>
  );
};

const ProductGrid = ({ products }: { products: ITravelProduct[] }) => {
  return (
    <Tbody>
      {products.map((product) => (
        <Product
          key={product.idx}
          idx={product.idx}
          name={product.name}
          mainImage={product.mainImage}
          price={product.price}
          spaceCategory={product.spaceCategory}
        />
      ))}
    </Tbody>
  );
};

const Product = (
  props: Pick<
    ITravelProduct,
    'idx' | 'name' | 'mainImage' | 'price' | 'spaceCategory'
  >,
) => {
  const onClickToCart = (idx: number) => {
    alert(idx);
  };

  return (
    <Tr>
      <Td>{props.idx}</Td>
      <Td>{props.name}</Td>
      <Td>{props.mainImage}</Td>
      <Td>{props.price}</Td>
      <Td>{props.spaceCategory}</Td>
      <Td>
        <SelectProductBtn onClick={() => onClickToCart(props.idx)} />
      </Td>
    </Tr>
  );
};

export default TravelProductList;
