import { useMemo, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { StyledLoader } from 'app/components/detail-common-components';
import { selectedProjectName } from 'store/pageStore/selectors';

import { selectedCommunityData, selectedCommunityDataLoading } from '../../selectors';
import { useDispatchAction } from '../../slice';
import { CommunityDTO, SocialNetwork, GithubNetwork } from '../../types';
import { Card } from './card';
import { GithubCard } from './github-card';
import { TabContentWrapper } from './styles';

const order: Array<keyof CommunityDTO> = ['telegram', 'twitter', 'medium', 'discord', 'gitInfo'];

export const Community = () => {
  const { fetchComminityData } = useDispatchAction();

  const communityDataLoading = useSelector(selectedCommunityDataLoading);
  const communityData = useSelector(selectedCommunityData);
  const projectName = useSelector(selectedProjectName);

  useEffect(() => {
    if (projectName && !communityData) fetchComminityData(projectName);
  }, [projectName, communityData, fetchComminityData]);

  const getCardsItem = useMemo(
    () =>
      communityData &&
      order.map(item => {
        const cardData = communityData[item];
        if (!cardData) return null;

        if (item === 'gitInfo') {
          return <GithubCard key={item} {...(cardData as GithubNetwork)} />;
        }
        if (item === 'telegram') {
          return (cardData as SocialNetwork[]).map((telegramItem: SocialNetwork) => (
            <Card key={item} socialNetwork={item} {...telegramItem} />
          ));
        }
        return <Card key={item} socialNetwork={item} {...(cardData as SocialNetwork)} />;
      }),
    [communityData]
  );

  if (communityDataLoading) return <StyledLoader />;

  return <TabContentWrapper>{getCardsItem}</TabContentWrapper>;
};
