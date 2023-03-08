type TItemType = Array<{
  price: string;
}>;

export const minMaxPrice = (arrayItem: TItemType) => {
  const { price: maxPrice } = arrayItem.reduce((max, val) =>
    max.price > val.price ? max : val,
  );

  const { price: minPrice } = arrayItem.reduce((min, val) =>
    min.price < val.price ? min : val,
  );

  return [Number(maxPrice), Number(minPrice)];
};
