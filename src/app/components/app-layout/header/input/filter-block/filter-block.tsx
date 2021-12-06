import { forwardRef, ComponentProps } from 'react';

import { Fade } from '@mui/material';

import Dollar from 'assets/icons/dollar.svg';
import { Button } from 'common/components/button';
import { CheckBox, CheckboxProps } from 'common/components/checkbox';
import { Input } from 'common/components/input';

import { StyledFilterBlock, StyledFilter, InputsGroup, CheckBoxGroup } from './styled';

const inputs = [
  { key: 'mCapFrom', placeholder: 'From: 100 000', label: 'Mcap' },
  { key: 'mCapTo', placeholder: '' },
  { key: 'tradingVolume', placeholder: '', label: 'Trading volume' },
];

const checkboxes: CheckboxProps[] = [
  { label: 'Popular', checked: true },
  { label: 'Sheet' },
  { label: 'Foo', checked: true },
  { label: 'Space Map TOP 100' },
];
type FilterBlockProps = ComponentProps<typeof StyledFilterBlock>;

export const FilterBlock = forwardRef<HTMLDivElement, FilterBlockProps>((props, ref) => (
  <Fade in={props.visible}>
    <StyledFilterBlock {...props} ref={ref}>
      <StyledFilter>
        <InputsGroup>
          {inputs.map(input => (
            <Input
              {...input}
              InputProps={{
                endAdornment: <Dollar />,
              }}
            />
          ))}
        </InputsGroup>
        <CheckBoxGroup>
          <span>Exchanges</span>
          {checkboxes.map(checkbox => (
            <CheckBox {...checkbox} />
          ))}
        </CheckBoxGroup>
        <Button>Filter Data</Button>
      </StyledFilter>
    </StyledFilterBlock>
  </Fade>
));
