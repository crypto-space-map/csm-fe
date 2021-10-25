import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

const useStyles = makeStyles({
  root: {
    '&.MuiTabs-root .MuiTab-root': {
      color: '#fff',
      backgroundColor: '#000',
      fontSize: '16px',
      textTransform: 'capitalize',
      padding: '12px 16px',
      lineHeight: '22px',
    },

    '&.MuiTabs-root .Mui-selected': {
      color: '#000',
      backgroundColor: '#fff',
    },
    '&.MuiTabs-root .MuiTabs-indicator': {
      backgroundColor: 'transparent',
    },
  },
});

interface CustomTabsProps {
  options: { value: string; label: string }[];
  value: string;
  onChangeTabValue: (arg0: string) => void;
}

export const CustomTabs = ({ value, options, onChangeTabValue }: CustomTabsProps) => {
  const classes = useStyles();
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    onChangeTabValue(newValue);
  };

  return (
    <Tabs className={classes.root} value={value} onChange={handleChange}>
      {options.map(item => (
        <Tab {...item} key={item.value} />
      ))}
    </Tabs>
  );
};
