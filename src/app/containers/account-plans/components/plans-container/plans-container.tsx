import { mockPlans } from '../../mock-data';
import { PlanCard } from '../plan-card';
import { StyledPlansContainer } from './styled';

export const PlansContainer = () => (
  <StyledPlansContainer>
    {mockPlans.map(item => (
      <PlanCard {...item} key={item.name} />
    ))}
  </StyledPlansContainer>
);
