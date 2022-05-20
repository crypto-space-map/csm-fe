import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { Loader as CommonLoader } from 'common/components/loader';
import { selectedProjectName } from 'store/pageStore/selectors';

import { selectedEnrichedEventsData, selectedEventsDataLoading } from '../../selectors';
import { useDispatchAction } from '../../slice';
import { EventsCard } from '../card/events-card';
import { EventsContentWrapper, LoaderWrapper } from './styles';

export const Events = () => {
  const projectName = useSelector(selectedProjectName);
  const eventsDataLoading = useSelector(selectedEventsDataLoading);
  const eventsData = useSelector(selectedEnrichedEventsData);
  const { fetchEventsData } = useDispatchAction();

  useEffect(() => {
    if (projectName && !eventsData) fetchEventsData(projectName);
  }, [projectName, eventsData, fetchEventsData]);

  if (eventsDataLoading)
    return (
      <LoaderWrapper>
        <CommonLoader />
      </LoaderWrapper>
    );
  return (
    <EventsContentWrapper>
      {eventsData && eventsData.map(item => <EventsCard key={item.id} {...item} />)}
    </EventsContentWrapper>
  );
};
