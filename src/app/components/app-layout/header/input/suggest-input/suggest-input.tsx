import { SyntheticEvent, useEffect, useState } from 'react';

import { useSpaceMap } from 'app/containers/space-map/hooks';
import CloseIcon from 'assets/icons/close-ico.svg';
import SearchIcon from 'assets/icons/search.svg';

import { lowerCaseTransform } from './helpers';
import { ListItem } from './list-item';
import { StyledAutocomplete, StyledTextField, SuggestionList } from './styled';

// TODO mock data remove

export const SuggestInput = () => {
  const [inputValue, setInputValue] = useState('');
  const { projects, fetchProjects } = useSpaceMap();

  // after emotion styling missed some types
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const filterOptions = (options: any[], { inputValue: value }: any) =>
    options
      .filter(({ name, symbol }) => lowerCaseTransform(name + symbol).includes(lowerCaseTransform(value)))
      .slice(0, 10);

  const onChange = (e: Event, value: typeof projects[number]) => {
    if (typeof value !== 'object') return;
    console.log(value);
    // TODO pass here changeProject func
  };

  const getOptionLabel = (option: typeof projects[number]) => option.name;

  const onInputChange = (_event: SyntheticEvent<Element, Event>, newInputValue: string) =>
    setInputValue(newInputValue);

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <StyledAutocomplete
      options={projects}
      inputValue={inputValue}
      freeSolo
      getOptionLabel={getOptionLabel}
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
        const { id, icon, name, symbol } = option;
        return (
          <ListItem {...props} symbol={symbol} icon={icon} highLight={inputValue} key={id}>
            {name}
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
