import React, { useState, useCallback, useRef } from 'react';

import LinkArrowIcon from 'assets/link-arrow.svg';
import { useOnClickOutside } from 'hooks/use-click-outside';

import { CustomSelect, SelectList, SelectItem, SelectHead, StyledLink, LinkArrowWrapper } from './styles';
import { SelectWithLinkProps } from './types';

export const SelectWithLink = ({ options }: SelectWithLinkProps) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [isShowOptionList, setShowOptionList] = useState(false);

  const handleClickOutside = useCallback(() => {
    setShowOptionList(false);
  }, []);

  useOnClickOutside(selectRef, handleClickOutside);

  const handleListDisplay = (event: React.MouseEvent<HTMLInputElement>) => {
    setShowOptionList(!isShowOptionList);
    event.preventDefault();
  };

  const handleOptionClick = useCallback(() => {
    setShowOptionList(false);
  }, []);

  return (
    <CustomSelect ref={selectRef}>
      <SelectHead onClick={handleListDisplay}>
        <LinkArrowWrapper isShowOptionList={isShowOptionList}>
          <LinkArrowIcon />
        </LinkArrowWrapper>
        <span>Links</span>
      </SelectHead>
      {isShowOptionList && (
        <SelectList>
          {options.map(item => (
            <SelectItem key={item.id} onClick={handleOptionClick}>
              <StyledLink target="_blank" href={item.link}>
                {item.link}
              </StyledLink>
            </SelectItem>
          ))}
        </SelectList>
      )}
    </CustomSelect>
  );
};
