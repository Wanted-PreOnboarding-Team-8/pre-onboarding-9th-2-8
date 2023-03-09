export interface ISpaceTagProps {
  spaceKey: string;
  spaceHashMap: { [key: string]: boolean };
  onToggleSpace: (key: string) => void;
}

type productFilterType = 'price' | 'location';

export interface IProductListProps {
  filter: productFilterType[];
}
