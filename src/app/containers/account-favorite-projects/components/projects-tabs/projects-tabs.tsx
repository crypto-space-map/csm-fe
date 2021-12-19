import { useState } from 'react';

import { Tab, Tabs } from 'common/components/tabs';

import { TabsButtonContainer } from './buttons-container';
import { ListEditBlock } from './list-edit';
import { TabsContainer } from './styled';

const values = [
  {
    value: 'Locked',
  },
  {
    value: 'Polkadot ecosystem',
  },
  {
    value: 'Some Favorite Projects',
  },
  {
    value: 'BEST Projects',
  },
  {
    value: 'BEST Projects1',
  },
  {
    value: 'BEST Projects2',
  },
  {
    value: 'BEST Projects3',
  },
];

export const ProjectsTabs = () => {
  const [value, setValue] = useState(0);

  const handleChangeTab = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const lastIndex = values.length - 1;

  const handleClickNext = () => {
    if (value === lastIndex) return setValue(0);
    return setValue(value + 1);
  };

  const handleClickPrev = () => {
    if (value === 0) return setValue(lastIndex);
    return setValue(value - 1);
  };

  return (
    <TabsContainer>
      <Tabs value={value} onChange={handleChangeTab}>
        {values.map((item, i) => (
          <Tab value={i} label={item.value} key={item.value} />
        ))}
      </Tabs>
      <TabsButtonContainer
        onNextClick={handleClickNext}
        onPrevClick={handleClickPrev}
        showShadow={value !== lastIndex}
      />
      <ListEditBlock />
    </TabsContainer>
  );
};
