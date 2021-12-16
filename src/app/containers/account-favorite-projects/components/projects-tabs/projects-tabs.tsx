import { useState } from 'react';

import { Tab, Tabs } from 'common/components/tabs';

export const ProjectsTabs = () => {
  const [value, setValue] = useState('one');

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChangeTab} style={{ display: 'grid', gridGap: 10 }}>
      <Tab value="one" label="Locked" />
      <Tab value="two" label="Polkadot ecosystem" />
      <Tab value="three" label="Some Favorite Projects" />
    </Tabs>
  );
};
