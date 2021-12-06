import { SyntheticEvent, useState } from 'react';

import CloseIcon from 'assets/icons/close-ico.svg';
import SearchIcon from 'assets/icons/search.svg';

import { lowerCaseTransform } from './helpers';
import { ListItem } from './list-item';
import { StyledAutocomplete, StyledTextField, SuggestionList } from './styled';

// TODO mock data remove
const top100Films = [
  { label: 'The shawshank Redemption', year: 1994, symbol: 'фф' },
  { label: 'The Godfather', year: 1972, symbol: 'вв' },
  { label: 'The Godfather: Part II', year: 1974, symbol: 'ф' },
  { label: 'The Dark Knight', year: 2008, symbol: 'ы' },
  { label: 'The 12 Angry Men', year: 1957, symbol: 'The' },
  { label: "The Schindler's List", year: 1993, symbol: 'яясяч' },
  { label: 'The Pulp Fiction', year: 1994, symbol: 'The' },
  { label: 'The Pulp Schindler', year: 1994, symbol: 'п' },
  { label: 'The Schindler Fiction', year: 1994, symbol: 'вв' },
  { label: 'The Pulp Men', year: 1994, symbol: 'ыы' },
  { label: 'The Men Fiction', year: 1994, symbol: 'е' },
];

export const SuggestInput = () => {
  const [inputValue, setInputValue] = useState('');
  // after emotion styling missed some types
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore

  const filterOptions = (options: any[], { inputValue: value }: any) =>
    options
      .filter(({ label, symbol }) => lowerCaseTransform(label + symbol).includes(lowerCaseTransform(value)))
      .slice(0, 10);

  const onChange = (e: Event, value: typeof top100Films[number]) => {
    if (typeof value !== 'object') return;
    console.log(value);
    // TODO pass here changeProject func
  };

  const onInputChange = (_event: SyntheticEvent<Element, Event>, newInputValue: string) =>
    setInputValue(newInputValue);

  return (
    <StyledAutocomplete
      options={top100Films}
      inputValue={inputValue}
      freeSolo
      // after emotion styling missed some types
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onChange={onChange}
      openOnFocus={!inputValue}
      autoComplete
      filterOptions={filterOptions}
      PopperComponent={SuggestionList}
      clearIcon={<CloseIcon />}
      includeInputInList
      onInputChange={onInputChange}
      renderOption={(props, option) => {
        // after emotion styling missed some types
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const { label, symbol, year } = option;
        return (
          <ListItem {...props} symbol={symbol} highLight={inputValue} key={label + year + year}>
            {label}
          </ListItem>
        );
      }}
      renderInput={params => (
        <StyledTextField
          {...params}
          placeholder="Search by Project Name or Ticker"
          variant="standard"
          InputProps={{
            ...params.InputProps,
            startAdornment: <SearchIcon />,
            disableUnderline: true,
          }}
        />
      )}
    />
  );
};
