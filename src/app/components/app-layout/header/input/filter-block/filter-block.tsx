import { forwardRef, ComponentProps, useState, useCallback, useMemo } from 'react';

import { Fade } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

import { useSpaceMap } from 'app/containers/space-map/hooks';
import { Exchanges, FilterProps } from 'app/containers/space-map/types';
import { CheckBox } from 'common/components/checkbox';

import { ButtonsGroup } from './buttons-group';
import { FilterInputs } from './inputs-group';
import { StyledFilterBlock, StyledFilter, InputsGroup, CheckBoxGroup } from './styled';
import { RangesGroup } from './suggest-group';

interface StateProps {
  mCapFrom: string | null;
  mCapTo: string | null;
  exchanges: Exchanges[];
}

const initialState: StateProps = {
  mCapFrom: null,
  mCapTo: null,
  exchanges: Object.values(Exchanges).map(exch => exch),
};

type FilterBlockProps = ComponentProps<typeof StyledFilterBlock> & { setClose: () => void };

export const FilterBlock = forwardRef<HTMLDivElement, FilterBlockProps>((props, ref) => {
  const { visible, setClose } = props;

  const { submitFilters, onClearFilters } = useSpaceMap();

  const [checkboxes] = useState(initialState.exchanges);
  const [selectedExchanges, setSelectedExchanges] = useState(initialState.exchanges);

  const { control, handleSubmit, reset, setValue } = useForm({
    defaultValues: initialState,
    mode: 'all',
    criteriaMode: 'all',
  });

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

  const handleSubmitFilters = useCallback(
    (data: FilterProps) => {
      const parsedData: FilterProps = {
        ...data,
        mCapFrom: data.mCapFrom && +data.mCapFrom,
        mCapTo: data.mCapTo && +data.mCapTo,
      };
      submitFilters(parsedData);
      setClose();
    },
    [submitFilters, setClose]
  );

  const handleClear = () => {
    onClearFilters();
    reset();
  };

  const handleChangeRange = useCallback(
    (data: Omit<typeof initialState, 'exchanges'>) => {
      Object.keys(data).forEach(item =>
        setValue(item as keyof typeof data, data[item as keyof typeof data])
      );
    },
    [setValue]
  );

  return (
    <Fade in={visible}>
      <StyledFilterBlock {...props} ref={ref}>
        <StyledFilter onSubmit={handleSubmit(handleSubmitFilters)}>
          <InputsGroup>
            <FilterInputs<StateProps> control={control} />
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
                    checked={selectedExchanges.includes(name)}
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
