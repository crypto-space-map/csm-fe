import { Control, Controller } from 'react-hook-form';

import Dollar from 'assets/icons/dollar.svg';
import { Input, InputProps } from 'common/components';
import { NUMBER_SEPARATOR_REG_EXP } from 'utils/reg-exp';

import { InputsGroup } from './styled';

type FilterInputsProps<T> = {
  // At react-hook-form  Control have default object type
  // eslint-disable-next-line @typescript-eslint/ban-types
  control: Control<T, object>;
};

const inputs: InputProps[] = [
  { key: 'mCapFrom', placeholder: 'From: 100 000', label: 'Mcap' },
  { key: 'mCapTo', placeholder: 'To:' },
];

const separatedValue = (val: string | null) => {
  if (val && val !== '' && +val < 1) return '1';
  const newVal = val
    ? `${val}`.replace(/\D/g, '').replace(/ /g, '').replace(NUMBER_SEPARATOR_REG_EXP, ' ')
    : '';

  return newVal;
};

export const FilterInputs = <T,>({ control }: FilterInputsProps<T>) => (
  <InputsGroup>
    {inputs.map(input => (
      <Controller
        key={input.key}
        name={input.key as keyof typeof inputs[number]['key']}
        control={control}
        render={({ field: { value, ...rest } }) => (
          <Input
            {...input}
            {...rest}
            value={separatedValue(value as unknown as string)}
            InputProps={{
              endAdornment: <Dollar />,
            }}
          />
        )}
      />
    ))}
  </InputsGroup>
);
