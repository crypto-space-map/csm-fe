import { useCallback, useEffect, useState } from 'react';

import { Control, Controller, Path } from 'react-hook-form';

import { CheckBox } from 'common/components/checkbox';

import { CheckBoxGroup } from './styled';

interface FavoriteDataProps {
  name: string;
  label: string;
  selected: boolean;
}

type FilterInputsProps<T> = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  control: Control<T & { favoriteList: string[] }, object>;
  favoriteData: FavoriteDataProps[];
};

export const FavoriteGroup = <T,>({ control, favoriteData }: FilterInputsProps<T>) => {
  const [selectedFavorite, setSelectedFavorite] = useState(control._defaultValues.favoriteList);
  const handleSelect = useCallback(
    (checkedName: string) => {
      const newExchanges = selectedFavorite?.includes(checkedName)
        ? selectedFavorite?.filter(name => name !== checkedName)
        : [...(selectedFavorite ?? []), checkedName];
      setSelectedFavorite(newExchanges);
      // если в новом ноборе есть checkedName, то значит он добавился и его не было
      return newExchanges;
    },
    [selectedFavorite]
  );
  useEffect(() => setSelectedFavorite(control._formValues.favoriteList), [control._formValues.favoriteList]);

  if (!favoriteData) return null;

  return (
    <CheckBoxGroup>
      {favoriteData.map(({ name, label }) => (
        <Controller
          key={name}
          name={'favoriteList' as Path<T & { favoriteList: string[] }>}
          render={({ field: { onChange, value } }) => (
            <CheckBox
              label={label}
              checked={value.includes(name)}
              onChange={() => onChange(handleSelect(name))}
            />
          )}
          control={control}
        />
      ))}
    </CheckBoxGroup>
  );
};
