import { forwardRef, ComponentProps, useState } from 'react';

import { Fade } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

import { useSpaceMap } from 'app/containers/space-map/hooks';
import Dollar from 'assets/icons/dollar.svg';
import { Button } from 'common/components/button';
import { CheckBox } from 'common/components/checkbox';
import { Input } from 'common/components/input';

import { StyledFilterBlock, StyledFilter, InputsGroup, CheckBoxGroup } from './styled';

const inputs = [
  { key: 'mCapFrom', placeholder: 'From: 100 000', label: 'Mcap' },
  { key: 'mCapTo', placeholder: '' },
];

type FilterBlockProps = ComponentProps<typeof StyledFilterBlock>;

export const FilterBlock = forwardRef<HTMLDivElement, FilterBlockProps>((props, ref) => {
  const { filters, setFilters } = useSpaceMap();

  const [checkboxes] = useState(filters.exchanges);

  const { control, handleSubmit, watch } = useForm<typeof filters>({
    defaultValues: filters,
    mode: 'all',
    criteriaMode: 'all',
  });

  const { exchanges } = watch();

  const onSubmit = (data: typeof filters) => {
    const numberParsed: typeof filters = {
      ...data,
      mCapFrom: Number(data.mCapFrom),
      mCapTo: Number(data.mCapTo),
    };
    return setFilters({ ...filters, ...numberParsed });
  };

  const handleSelect = (checkedName: typeof exchanges[number]) => {
    const newExchanges = exchanges?.includes(checkedName)
      ? exchanges?.filter(name => name !== checkedName)
      : [...(exchanges ?? []), checkedName];
    return newExchanges;
  };

  return (
    <Fade in={props.visible}>
      <StyledFilterBlock {...props} ref={ref}>
        <StyledFilter onSubmit={handleSubmit(onSubmit)}>
          <InputsGroup>
            {inputs.map(input => (
              <Controller
                name={input.key as keyof typeof filters}
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
            {checkboxes.map(name => (
              <Controller
                name="exchanges"
                render={({ field: { onChange } }) => (
                  <CheckBox
                    label={name}
                    checked={watch().exchanges.includes(name)}
                    onChange={() => onChange(handleSelect(name))}
                  />
                )}
                control={control}
              />
            ))}
          </CheckBoxGroup>
          <Button type="submit">Filter Data</Button>
        </StyledFilter>
      </StyledFilterBlock>
    </Fade>
  );
});
