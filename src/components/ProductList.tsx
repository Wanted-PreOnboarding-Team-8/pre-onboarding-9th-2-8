import { useEffect, useState } from 'react';
import {
  VStack,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Stack,
  Text,
} from '@chakra-ui/react';
import { getProducts } from '@/store/slices/productSlice';
import Product from '@/components/Product';
import { IProduct } from '@/interface/product';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  generateBoolMappedObj,
  getMaxPrice,
} from '@/lib/utils/productsHelpers';
import SpaceTag from './SpaceTag';
import Loading from './Loading';

const ProductList = () => {
  const dispatch = useAppDispatch();
  const {
    products: { products, isLoading, error },
  } = useAppSelector((state) => state);

  const [currentValues, setCurrentValues] = useState<number[]>([]);
  const [spaceHashMap, setSpaceHashMap] = useState<{ [key: string]: boolean }>(
    {},
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    setCurrentValues([0, getMaxPrice(products)]);
    setSpaceHashMap(generateBoolMappedObj(products, true));
  }, [products]);

  const onSlidePrice = (event: number[]) => {
    setCurrentValues(
      event.map((value) => Math.floor((value / 100) * getMaxPrice(products))),
    );
  };

  const onToggleSpace = (key: string) => {
    setSpaceHashMap({
      ...spaceHashMap,
      [key]: !spaceHashMap[key],
    });
  };

  const filteredProducts = products.filter((product: IProduct) => {
    const [currentMin, currentMax] = currentValues;

    return (
      product.price >= currentMin &&
      product.price <= currentMax &&
      spaceHashMap[product.spaceCategory]
    );
  });

  return (
    <VStack as="section" w="100%" minW="500px" p={4}>
      <VStack as="section" w="100%" p={4}>
        <RangeSlider defaultValue={[0, 100]} onChange={onSlidePrice}>
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
        <Text fontSize="2xl">
          {`${currentValues[0]?.toLocaleString()}원`} ~{' '}
          {`${currentValues[1]?.toLocaleString()}원`}
        </Text>
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
      </VStack>
      {error && <Text>{error}</Text>}
      {isLoading && <Loading text="데이터 로딩중..." />}
      {!isLoading && !error && filteredProducts.length === 0 && (
        <Text>상품 검색 결과 없음</Text>
      )}
      {!isLoading &&
        !error &&
        filteredProducts.map((product: IProduct) => (
          <Product key={product.idx} {...product} />
        ))}
    </VStack>
  );
};
export default ProductList;
