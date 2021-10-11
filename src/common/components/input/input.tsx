import React, { FC, useRef, useState, useCallback, useEffect } from 'react';

import styled from '@emotion/styled';

import { InputButton } from './entry/input-button';

type adornmentPosType = 'start' | 'end';
type ContainerInputProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  adornmentPosition?: adornmentPosType;
  fullWidth?: boolean;
  error?: boolean;
};
export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  ContainerInputProps & {
    adornment?: React.ReactElement;
    focus?: boolean;
    btnIcon?: React.ReactNode;
  };

const InputContainer = styled.div<ContainerInputProps>`
  display: grid;
  grid-template-columns: ${({ adornmentPosition }) =>
    adornmentPosition === 'end' ? '4px 1fr auto auto 4px' : '4px  auto  1fr auto 4px'};
  grid-template-rows: 4px 1fr 4px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  font-family: inherit;
  background-color: #ffffff;
  border-radius: 4px;
  ${({ error }) => error && 'border:  1px solid rgb(255 17 0) !important'};
`;

const CustomInput = styled.input<InputProps>`
  grid-area: ${({ adornmentPosition }) => (adornmentPosition === 'end' ? '1 / 1 / 4/ 3' : '1 / 3 / 4/ 4')};
  width: inherit;
  height: inherit;
  padding: ${({ adornmentPosition }) =>
    adornmentPosition === 'end' ? ' 13px 1em 13px 1em' : '13px 1em 13px 1em'};
  font-size: 16px;
  font-family: inherit;
  line-height: 22px;
  border: none;
  border-radius: inherit;
  outline: none;
`;

const AdornmentStyle = styled.div<InputProps & ContainerInputProps>`
  display: flex;
  grid-area: ${({ adornmentPosition }) => (adornmentPosition === 'end' ? ' 2 / 4 / 3/ 5' : '2 / 2 / 3/ 3')};
  height: 100%;
  justify-self: ${({ adornmentPosition }) => adornmentPosition || 'end'};
`;

export const Input: FC<InputProps> = React.memo(
  ({ className, adornment, fullWidth, focus, adornmentPosition, error, btnIcon, ...restProps }) => {
    const containerRef = useRef<HTMLInputElement>(null);
    const [empty, setEmpty] = useState(true);

    useEffect(() => (restProps.value ? setEmpty(false) : setEmpty(true)), [restProps.value]);

    useEffect(() => {
      if (focus && containerRef.current) {
        containerRef.current.focus();
      }
    }, [focus]);

    const onClearInput = useCallback(e => {
      if (containerRef.current) {
        e.stopPropagation();
        Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set?.call(
          containerRef.current,
          ''
        );
        containerRef.current.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
        containerRef.current.focus();
      }
    }, []);

    return (
      <InputContainer
        className={className}
        fullWidth={fullWidth}
        adornmentPosition={adornmentPosition || 'end'}
        error={error}>
        <CustomInput
          {...restProps}
          adornmentPosition={adornmentPosition || 'end'}
          ref={containerRef}
          tabIndex={focus ? 0 : undefined}
        />
        {adornment && (
          <AdornmentStyle adornmentPosition={adornmentPosition || 'end'}>{adornment}</AdornmentStyle>
        )}
        {!empty && (
          <InputButton
            adornmentPosition={adornmentPosition || 'end'}
            onClick={onClearInput}
            type="button"
            btnIcon={btnIcon}
          />
        )}
      </InputContainer>
    );
  }
);
