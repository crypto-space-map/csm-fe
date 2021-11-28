export type ListItemProps<T extends unknown> = {
  value: T;
  highLight?: string;
  onClick: (value: T) => void;
  children: string;
};
