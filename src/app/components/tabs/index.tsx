import styled from '@emotion/styled';
import { Tab as MuiTab, Tabs as MuiTabs } from '@mui/material';
import { COLOR_PALLETTE } from 'global/pallette';

const StyledTab = styled(MuiTab)`
  color: ${COLOR_PALLETTE.MAIN_WHITE};
  background-color: ${COLOR_PALLETTE.MAIN_BLACK};
  font-size: 16px;
  text-transform: capitalize;
  padding: 12px 16px;
  line-height: 22px;

  &.Mui-selected {
    color: ${COLOR_PALLETTE.MAIN_BLACK};
    background-color: ${COLOR_PALLETTE.MAIN_WHITE};
  }
`;

const StyledTabs = styled(MuiTabs)`
  & .MuiTabs-indicator {
    display: none;
  }
`;

interface CustomTabsProps {
  options: { value: string; label: string }[];
  value: string;
  onChangeTabValue: (arg0: string) => void;
}

export const CustomTabs = ({ value, options, onChangeTabValue }: CustomTabsProps) => {
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    onChangeTabValue(newValue);
  };

  return (
    <StyledTabs value={value} onChange={handleChange}>
      {options.map(item => (
        <StyledTab {...item} key={item.value} />
      ))}
    </StyledTabs>
  );
};
