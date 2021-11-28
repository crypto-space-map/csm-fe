import { ChangeEvent, MouseEvent, useCallback, useEffect, useRef, useState } from 'react';

import { IconButton } from '@mui/material';

import CloseIcon from 'assets/icons/close-ico.svg';
import SearchIcon from 'assets/icons/search.svg';

import { lowerCaseTransform } from './helpers';
import { ListItem } from './list-item';
import { SuggestInputContainer, SuggestionList, StyledInput } from './styled';

// TODO mock data remove
const top100Films = [
  { label: 'The shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: 'The 12 Angry Men', year: 1957 },
  { label: "The Schindler's List", year: 1993 },
  { label: 'The Pulp Fiction', year: 1994 },
  { label: 'The Pulp Schindler', year: 1994 },
  { label: 'The Schindler Fiction', year: 1994 },
  { label: 'The Pulp Men', year: 1994 },
  { label: 'The Men Fiction', year: 1994 },
];

export const SuggestInput = () => {
  const [state, setState] = useState('');
  const [sortedFunds, setSortedFunds] = useState<typeof top100Films>([]);
  const [suggestVisible, setSuggestVisible] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setState(event.target.value);

  const onClick = (e: string) => {
    setState(e);
    setSuggestVisible(false);
  };

  const handleClickInput = () => setSuggestVisible(true);

  const onClearInput = useCallback(e => {
    if (inputRef.current) {
      e.stopPropagation();
      Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set?.call(
        inputRef.current,
        ''
      );
      inputRef.current.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const sorted = state
      ? top100Films
          .filter(({ label }) => lowerCaseTransform(label).includes(lowerCaseTransform(state)))
          .slice(0, 10) || []
      : [];
    setSortedFunds(sorted);
    if (suggestVisible) {
      setSuggestVisible(true);
    }
  }, [state, suggestVisible]);

  return (
    <SuggestInputContainer>
      <StyledInput
        inputRef={inputRef}
        placeholder="Search"
        disableUnderline
        fullWidth
        startAdornment={<SearchIcon />}
        value={state}
        onChange={handleChange}
        onClick={handleClickInput}
        endAdornment={
          state ? (
            <IconButton onClick={onClearInput}>
              <CloseIcon />
            </IconButton>
          ) : null
        }
      />
      {suggestVisible && !!sortedFunds.length && (
        <SuggestionList>
          {sortedFunds.map(item => (
            <ListItem
              onClick={onClick}
              value={item.label}
              highLight={lowerCaseTransform(state)}
              key={item.label + item.year}>
              {lowerCaseTransform(item.label)}
            </ListItem>
          ))}
        </SuggestionList>
      )}
    </SuggestInputContainer>
  );
};
