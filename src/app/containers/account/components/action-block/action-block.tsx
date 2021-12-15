import { useAccount } from '../../hooks';
import { AccountTabHeader, SelectedTabWrapper, StyledActionBlock } from './styled';

export const ActionBlock = () => {
  const { selectedTab } = useAccount();
  console.log(selectedTab);
  return (
    <>
      <AccountTabHeader>{selectedTab}</AccountTabHeader>
      <StyledActionBlock />
      <SelectedTabWrapper>123</SelectedTabWrapper>
    </>
  );
};
