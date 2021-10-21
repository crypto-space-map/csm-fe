import { memo, useState } from 'react';

import { CustomTabs } from 'app/components/tabs';

import { Funds as FundsTable } from './components/funds';
const detailInfoTabs = {
  Overview: 'OVERVIEW',
  Funds: 'FUNDS',
  Partners: 'PARTNERS',
  Community: 'COMMUNITY',
  Exchanges: 'EXCHANGES',
  Social: 'SOCIAL',
  Events: 'EVENTS',
};

const options = Object.keys(detailInfoTabs).map(item => ({
  label: item,
  // @ts-ignore
  value: detailInfoTabs[item],
}));

export const DetailInfoCard = memo(() => {
  const [activeTab, setActiveTab] = useState(detailInfoTabs.Overview);

  return (
    <div style={{ height: 400, width: 662 }}>
      {/* <FundsTable /> */}
      <CustomTabs value={activeTab} options={options} onChangeTabValue={setActiveTab} />
    </div>
  );
});
