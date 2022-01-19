import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { Loader as CommonLoader } from 'common/components/loader';
import { selectedProjectName } from 'store/pageStore/selectors';

import { selectedEnrichedSocialData, selectedSocialDataLoading } from '../../selectors';
import { useDispatchAction } from '../../slice';
import { Card } from '../card';
import { SocialContentWrapper, LoaderWrapper } from './styles';

export const Social = () => {
  const projectName = useSelector(selectedProjectName);
  const socialDataLoading = useSelector(selectedSocialDataLoading);
  const socialData = useSelector(selectedEnrichedSocialData);
  const { fetchSocialData } = useDispatchAction();

  useEffect(() => {
    if (projectName) fetchSocialData(projectName);
  }, [projectName, fetchSocialData]);

  if (socialDataLoading)
    return (
      <LoaderWrapper>
        <CommonLoader />
      </LoaderWrapper>
    );
  return (
    <SocialContentWrapper>
      {socialData && socialData.map(item => <Card key={item.id} {...item} />)}
    </SocialContentWrapper>
  );
};
