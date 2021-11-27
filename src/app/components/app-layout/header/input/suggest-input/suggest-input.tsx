import { ChangeEvent, useState } from 'react';

import SearchIcon from 'assets/icons/search.svg';

import { SuggestInputContainer, SuggestionList, StyledInput, StyledListItem } from './styled';

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
];

export const SuggestInput = () => {
  const [state, setState] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setState(event.target.value);

  const transformText = (text: string) => text.toLowerCase();

  const sortedFunds = state
    ? top100Films.filter(({ label }) => transformText(label).includes(transformText(state))) || []
    : [];

  return (
    <SuggestInputContainer>
      <StyledInput
        placeholder="Search"
        disableUnderline
        fullWidth
        startAdornment={<SearchIcon />}
        onChange={handleChange}
      />
      {!!sortedFunds.length && (
        <SuggestionList>
          {sortedFunds.map(item => (
            <StyledListItem>{item.label}</StyledListItem>
          ))}
        </SuggestionList>
      )}
    </SuggestInputContainer>
  );
};
