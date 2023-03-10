import { useEffect, useState } from 'react';
import {
  Heading,
  VStack,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Stack,
} from '@chakra-ui/react';
import { getProducts } from '@/store/slices/productSlice';
import Product from '@/components/Product';
import { IProduct } from '@/interface/product';
import { IProductListProps } from '@/interface/props';
import { RootState, useAppDispatch, useAppSelector } from '@/store';
import {
  generateBoolMappedObj,
  getMaxPrice,
} from '@/lib/utils/productsHelpers';
import SpaceTag from './SpaceTag';

const ProductList = ({ filters, pageName }: IProductListProps) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state: RootState) => {
    switch (pageName) {
      case 'main':
        return state.products.products;
      case 'reservations':
        return state.cart.products;
      default:
        return [];
    }
  });

  const [currentValues, setCurrentValues] = useState<number[]>([]);
  const [spaceHashMap, setSpaceHashMap] = useState<{ [key: string]: boolean }>(
    {},
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    filters?.includes('price') && setCurrentValues([0, getMaxPrice(products)]);
    filters?.includes('location') &&
      setSpaceHashMap(generateBoolMappedObj(products, true));
  }, [products, filters]);

  const filterByConditions = (product: IProduct) => {
    let isSatisfied = true;
    if (filters?.includes('price')) {
      const [currentMin, currentMax] = currentValues;
      if (product.price < currentMin || product.price > currentMax)
        isSatisfied = false;
    }

    if (filters?.includes('location')) {
      if (!spaceHashMap[product.spaceCategory]) isSatisfied = false;
    }
    return isSatisfied;
  };

  return (
    <VStack as="section" bg="blue.100" w="75%" minW="500px" p={4}>
      <Heading>상품 정보</Heading>
      <VStack as="section" bg="blue.100" w="100%" p={4}>
        {filters?.includes('price') && (
          <PriceFilter
            products={products}
            currentValues={currentValues}
            setCurrentValues={setCurrentValues}
          />
        )}
        {filters?.includes('location') && (
          <LoacationFilter
            spaceHashMap={spaceHashMap}
            setSpaceHashMap={setSpaceHashMap}
          />
        )}
      </VStack>
      {products.filter(filterByConditions).map((product: IProduct) => (
        <Product key={product.idx} {...product} />
      ))}
    </VStack>
  );
};

export default ProductList;

const PriceFilter = ({ products, currentValues, setCurrentValues }: any) => {
  const onSlidePrice = (event: number[]) => {
    setCurrentValues(
      event.map((value) => Math.floor((value / 100) * getMaxPrice(products))),
    );
  };

  return (
    <RangeSlider defaultValue={[0, 100]} onChange={onSlidePrice} mb="30px">
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} mt="20px">
        {currentValues[0]}
      </RangeSliderThumb>
      <RangeSliderThumb index={1} mt="20px">
        {currentValues[1]}
      </RangeSliderThumb>
    </RangeSlider>
  );
};

const LoacationFilter = ({ spaceHashMap, setSpaceHashMap }: any) => {
  const onToggleSpace = (key: string) => {
    setSpaceHashMap({
      ...spaceHashMap,
      [key]: !spaceHashMap[key],
    });
  };

  return (
    <Stack direction="row">
      {Object.keys(spaceHashMap).map((spaceKey) => (
        <SpaceTag
          key={spaceKey}
          spaceKey={spaceKey}
          spaceHashMap={spaceHashMap}
          onToggleSpace={onToggleSpace}
        />
      ))}
    </Stack>
  );
};
