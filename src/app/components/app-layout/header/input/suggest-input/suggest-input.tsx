import { SyntheticEvent, useEffect, useState } from 'react';

import { createFilterOptions } from '@mui/material';
import { useSelector } from 'react-redux';

import { selectAuth } from 'app/containers/login/selectors';
import { useSpaceMap } from 'app/containers/space-map/hooks';
import CloseIcon from 'assets/icons/close-ico.svg';
import SearchIcon from 'assets/icons/search.svg';
import { useSetNewProject } from 'hooks/use-set-new-project';
import { selectedProjectName } from 'store/pageStore/selectors';

import { lowerCaseTransform } from './helpers';
import { ListItem } from './list-item';
import { StyledAutocomplete, StyledTextField, SuggestionList } from './styled';

export const SuggestInput = () => {
  const [inputValue, setInputValue] = useState('');
  const { projects, fetchProjects, fetchPartnershipsData } = useSpaceMap();
  const { handleSelectProduct } = useSetNewProject();
  const projectName = useSelector(selectedProjectName);
  const isAuth = useSelector(selectAuth);
  // after emotion styling missed some types
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const filterOptions = createFilterOptions<ProjectData>({
    limit: 10,
    stringify: ({ name, symbol }) => lowerCaseTransform(name + symbol),
  });

  const onChange = (e: Event, value: typeof projects[number]) => {
    if (typeof value === 'object' && value?.projectId) {
      handleSelectProduct(value?.projectId);
      fetchPartnershipsData(value?.projectId);
    }
  };

  useEffect(() => {
    setInputValue(projectName?.toUpperCase() || '');
  }, [projectName]);

  const getOptionLabel = (option: typeof projects[number]) => option.name;

  const onInputChange = (_event: SyntheticEvent<Element, Event>, newInputValue: string) =>
    setInputValue(newInputValue);

  useEffect(() => {
    if (isAuth) {
      fetchProjects();
    }
  }, [fetchProjects, isAuth]);

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
          placeholder="Search by project name or ticker"
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
