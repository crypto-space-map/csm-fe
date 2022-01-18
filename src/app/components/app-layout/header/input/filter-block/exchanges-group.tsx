import { useCallback, useEffect, useState } from 'react';

import { Control, Controller, Path } from 'react-hook-form';

import { Exchanges } from 'app/containers/space-map/types';
import { CheckBox } from 'common/components/checkbox';

import { CheckBoxGroup } from './styled';

type FilterInputsProps<T> = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  control: Control<T & { exchanges: Array<keyof typeof Exchanges> }, object>;
};

export const ExchangesGroup = <T,>({ control }: FilterInputsProps<T>) => {
  const [checkboxes] = useState(control._defaultValues.exchanges as Array<keyof typeof Exchanges>);
  const [selectedExchanges, setSelectedExchanges] = useState(checkboxes);

  const handleSelect = useCallback(
    (checkedName: typeof selectedExchanges[number]) => {
      const newExchanges = selectedExchanges?.includes(checkedName)
        ? selectedExchanges?.filter(name => name !== checkedName)
        : [...(selectedExchanges ?? []), checkedName];
      setSelectedExchanges(newExchanges);
      return newExchanges;
    },
    [selectedExchanges]
  );
  useEffect(() => setSelectedExchanges(control._formValues.exchanges), [control._formValues.exchanges]);

  if (!checkboxes) return null;

  return (
    <CheckBoxGroup>
      <span>Exchanges</span>
      {checkboxes.map(name => (
        <Controller
          name={'exchanges' as Path<T & { exchanges: Array<keyof typeof Exchanges> }>}
          render={({ field: { onChange, value } }) => (
            <CheckBox
              label={Exchanges[name as unknown as keyof typeof Exchanges]}
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
