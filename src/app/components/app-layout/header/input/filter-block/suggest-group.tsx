import { useCallback } from 'react';

import { FilterProps } from 'app/containers/space-map/types';
import { Button } from 'common/components';

import { StyledRangesGroup } from './styled';

type Range = { btnText: string } & Omit<FilterProps, 'exchanges'>;

type RangeGroupProps = {
  onChange: (data: Omit<FilterProps, 'exchanges'>) => void;
};

type BtnProps = RangeGroupProps & Range;

const ranges: Range[] = [
  { mCapFrom: 1000000000, mCapTo: null, btnText: '> $10B' },
  { mCapFrom: 100000000, mCapTo: 1000000000, btnText: '$1B — $10B' },
  { mCapFrom: 10000000, mCapTo: 100000000, btnText: '$100M — $1B' },
  { mCapFrom: 1000000, mCapTo: 10000000, btnText: '$10M — $100M' },
  { mCapFrom: 100000, mCapTo: 1000000, btnText: '$1M — $10M' },
  { mCapFrom: 10000, mCapTo: 100000, btnText: '$10M — $100M' },
];

const Btn = ({ onChange, mCapTo, mCapFrom, btnText }: BtnProps) => {
  const handleChange = useCallback(() => onChange({ mCapFrom, mCapTo }), [onChange, mCapTo, mCapFrom]);
  return (
    <Button variant="text" size="small" onClick={handleChange}>
      {btnText}
    </Button>
  );
};

export const RangesGroup = ({ onChange }: RangeGroupProps) => (
  <StyledRangesGroup>
    <span>Most searched ranges</span>
    <div>
      {ranges.map(item => (
        <Btn {...item} onChange={onChange} key={`${item.mCapFrom}${item.mCapTo}`} />
      ))}
    </div>
  </StyledRangesGroup>
);
