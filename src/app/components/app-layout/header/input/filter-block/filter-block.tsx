import { forwardRef, ComponentProps, useState, useCallback, useEffect } from 'react';

import { Fade } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

import { useSpaceMap } from 'app/containers/space-map/hooks';
import Dollar from 'assets/icons/dollar.svg';
import { CheckBox } from 'common/components/checkbox';
import { Input, InputProps } from 'common/components/input';
import { NUMBER_SEPARATOR_REG_EXP } from 'utils/reg-exp';

import { ButtonsGroup } from './buttons-group';
import { StyledFilterBlock, StyledFilter, InputsGroup, CheckBoxGroup } from './styled';
import { RangesGroup } from './suggest-group';

const inputs: InputProps[] = [
  { key: 'mCapFrom', placeholder: 'From: 100 000', label: 'Mcap' },
  { key: 'mCapTo', placeholder: '' },
];

const separatedValue = (val: number | null) =>
  val ? val.toString().replace(NUMBER_SEPARATOR_REG_EXP, ' ') : '';

type FilterBlockProps = ComponentProps<typeof StyledFilterBlock> & { setClose: () => void };

export const FilterBlock = forwardRef<HTMLDivElement, FilterBlockProps>((props, ref) => {
  const { visible, setClose } = props;

  const { filters, submitFilters, onChangeFilters, onClearFilters } = useSpaceMap();

  const [checkboxes] = useState(filters.exchanges);

  const { control, handleSubmit, watch, reset, setValue } = useForm({
    defaultValues: filters,
    mode: 'all',
    criteriaMode: 'all',
  });

  const { exchanges, mCapFrom, mCapTo } = watch();

  const handleSelect = useCallback(
    (checkedName: typeof exchanges[number]) => {
      const newExchanges = exchanges?.includes(checkedName)
        ? exchanges?.filter(name => name !== checkedName)
        : [...(exchanges ?? []), checkedName];
      return newExchanges;
    },
    [exchanges]
  );

  const handleSubmitFilters = useCallback(() => {
    submitFilters();
    setClose();
  }, [submitFilters, setClose]);

  const handleClear = () => {
    onClearFilters();
    reset();
  };

  const handleChangeRange = useCallback(
    (data: Omit<typeof filters, 'exchanges'>) => {
      Object.keys(data).forEach(item =>
        setValue(item as keyof typeof data, data[item as keyof typeof data])
      );
    },
    [setValue]
  );

  useEffect(() => {
    onChangeFilters({ exchanges, mCapTo, mCapFrom });
  }, [exchanges, mCapFrom, mCapTo, onChangeFilters]);

  return (
    <Fade in={visible}>
      <StyledFilterBlock {...props} ref={ref}>
        <StyledFilter onSubmit={handleSubmit(handleSubmitFilters)}>
          <InputsGroup>
            {inputs.map(input => (
              <Controller
                name={input.key as keyof typeof filters}
                control={control}
                render={({ field: { name, ...rest } }) => (
                  <Input
                    {...input}
                    {...rest}
                    value={separatedValue(filters[name] as number)}
                    InputProps={{
                      inputProps: { step: 10000 },
                      endAdornment: <Dollar />,
                    }}
                  />
                )}
              />
            ))}
          </InputsGroup>
          <RangesGroup onChange={handleChangeRange} />
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
          <ButtonsGroup onClear={handleClear} />
        </StyledFilter>
      </StyledFilterBlock>
    </Fade>
  );
});
