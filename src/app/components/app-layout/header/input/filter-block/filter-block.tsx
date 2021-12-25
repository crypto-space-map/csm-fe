import { forwardRef, ComponentProps } from 'react';

import { Fade } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

import { useSpaceMap } from 'app/containers/space-map/hooks';
import Dollar from 'assets/icons/dollar.svg';
import { Button } from 'common/components/button';
import { CheckBox, CheckboxProps } from 'common/components/checkbox';
import { Input } from 'common/components/input';

import { StyledFilterBlock, StyledFilter, InputsGroup, CheckBoxGroup } from './styled';

const inputs = [
  { key: 'mCapFrom', placeholder: 'From: 100 000', label: 'Mcap' },
  { key: 'mCapTo', placeholder: '' },
];
const defaultValues = {
  mCapFrom: 0,
  mCapTo: 0,
};

const checkboxes: CheckboxProps[] = [
  { label: 'Binance', checked: true },
  { label: 'Coinbase', checked: true },
  { label: 'Ftx', checked: true },
  { label: 'Huobi', checked: true },
  { label: 'Okex', checked: true },
];

type FilterBlockProps = ComponentProps<typeof StyledFilterBlock>;

export const FilterBlock = forwardRef<HTMLDivElement, FilterBlockProps>((props, ref) => {
  const { control, handleSubmit } = useForm<typeof defaultValues>({
    defaultValues,
    mode: 'all',
    criteriaMode: 'all',
  });

  const { filters, setFilters } = useSpaceMap();

  const onSubmit = (data: typeof defaultValues) => {
    const numberParsed: typeof defaultValues = { ...data, mCapFrom: +data.mCapFrom, mCapTo: +data.mCapTo };
    return setFilters({ ...filters, ...numberParsed });
  };

  return (
    <Fade in={props.visible}>
      <StyledFilterBlock {...props} ref={ref}>
        <StyledFilter onSubmit={handleSubmit(onSubmit)}>
          <InputsGroup>
            {inputs.map(input => (
              <Controller
                name={input.key as keyof typeof defaultValues}
                control={control}
                render={({ field: { value, ...rest } }) => (
                  <Input
                    {...rest}
                    {...input}
                    value={value || ''}
                    type="number"
                    InputProps={{
                      inputProps: { min: 0 },
                      endAdornment: <Dollar />,
                    }}
                  />
                )}
              />
            ))}
          </InputsGroup>
          <CheckBoxGroup>
            <span>Exchanges</span>
            {checkboxes.map(checkbox => (
              <CheckBox {...checkbox} />
            ))}
          </CheckBoxGroup>
          <Button type="submit">Filter Data</Button>
        </StyledFilter>
      </StyledFilterBlock>
    </Fade>
  );
});
