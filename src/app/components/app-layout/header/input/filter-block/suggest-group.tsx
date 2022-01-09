import { memo, useCallback } from 'react';

import { Button } from 'common/components';

import { RangeButton, StyledRangesGroup } from './styled';

type Range = { btnText: string; mCapFrom: string | null; mCapTo: string | null };

type RangeGroupProps = {
  onChange: (data: Omit<Range, 'btnText'>) => void;
};

type BtnProps = RangeGroupProps & Range;

const ranges: Range[] = [
  { mCapFrom: '10000000000', mCapTo: null, btnText: '> $10B' },
  { mCapFrom: '1000000000', mCapTo: '10000000000', btnText: '$1B — $10B' },
  { mCapFrom: '100000000', mCapTo: '1000000000', btnText: '$100M — $1B' },
  { mCapFrom: '10000000', mCapTo: '100000000', btnText: '$10M — $100M' },
  { mCapFrom: '1000000', mCapTo: '10000000', btnText: '$1M — $10M' },
  { mCapFrom: null, mCapTo: '1000000', btnText: '<$1M' },
];

const Btn = ({ onChange, mCapTo, mCapFrom, btnText }: BtnProps) => {
  const handleChange = useCallback(() => onChange({ mCapFrom, mCapTo }), [onChange, mCapTo, mCapFrom]);
  return (
    <RangeButton variant="text" size="small" onClick={handleChange}>
      {btnText}
    </RangeButton>
  );
};

export const RangesGroup = memo(({ onChange }: RangeGroupProps) => (
  <StyledRangesGroup>
    <span>Most searched ranges</span>
    <div>
      {ranges.map(item => (
        <Btn {...item} onChange={onChange} key={`${item.mCapFrom}${item.mCapTo}`} />
      ))}
    </div>
  </StyledRangesGroup>
));
