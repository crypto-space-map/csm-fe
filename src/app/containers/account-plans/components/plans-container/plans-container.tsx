import { mockPlans } from '../../mock-data';
import { PlanCard } from '../plan-card';
import { PlansContainerWrapper, StyledPlansContainer } from './styled';

export const PlansContainer = () => (
  <PlansContainerWrapper>
    <StyledPlansContainer>
      {mockPlans.map(item => (
        <PlanCard {...item} key={item.name} />
      ))}
    </StyledPlansContainer>
  </PlansContainerWrapper>
);
