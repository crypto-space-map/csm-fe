import { forwardRef, ComponentProps, useCallback } from 'react';

import { Fade } from '@mui/material';
import { useForm } from 'react-hook-form';

import { useSpaceMap } from 'app/containers/space-map/hooks';
import { Exchanges, FilterProps } from 'app/containers/space-map/types';

import { ButtonsGroup } from './buttons-group';
import { ExchangesGroup } from './exchanges-group';
import { FilterInputs } from './inputs-group';
import { StyledFilterBlock, StyledFilter } from './styled';
import { RangesGroup } from './suggest-group';

type ExchangesType = keyof typeof Exchanges;

interface StateProps {
  mCapFrom: string | null;
  mCapTo: string | null;
  exchanges: ExchangesType[];
}

const initialState: StateProps = {
  mCapFrom: null,
  mCapTo: null,
  exchanges: Object.keys(Exchanges).map(exch => exch as ExchangesType),
};

type FilterBlockProps = ComponentProps<typeof StyledFilterBlock> & { setClose: () => void };

export const FilterBlock = forwardRef<HTMLDivElement, FilterBlockProps>((props, ref) => {
  const { visible, setClose } = props;

  const { submitFilters, onClearFilters } = useSpaceMap();

  const { control, handleSubmit, reset, setValue } = useForm({
    defaultValues: initialState,
    mode: 'all',
    criteriaMode: 'all',
  });

  const handleSubmitFilters = useCallback(
    (data: FilterProps) => {
      const parsedData: FilterProps = {
        ...data,
        mCapFrom: data.mCapFrom && Number(`${data.mCapFrom}`.replace(/ /g, '')),
        mCapTo: data.mCapTo && Number(`${data.mCapTo}`.replace(/ /g, '')),
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
          <FilterInputs<StateProps> control={control} />
          <RangesGroup onChange={handleChangeRange} />
          <ExchangesGroup control={control} />
          <ButtonsGroup onClear={handleClear} />
        </StyledFilter>
      </StyledFilterBlock>
    </Fade>
  );
});
