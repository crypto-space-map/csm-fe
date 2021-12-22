import { DisableIcon, DoneIcon } from 'assets';
import { Status, SVGWrapper } from 'common/components';

import { AccountPlan, PlanProps } from '../../types';
import {
  PlanName,
  PlanPrice,
  PlanPropertiesContainer,
  PropertiesBlock,
  SelectedPlan,
  StyledPlanCard,
  StyledProperty,
} from './styled';

const Property = ({ isAllowed, name }: PlanProps['properties'][number]) => (
  <StyledProperty>
    <SVGWrapper>{isAllowed ? <DoneIcon /> : <DisableIcon />}</SVGWrapper>
    {name}
  </StyledProperty>
);

export const PlanCard = ({ name, price, properties, selectedPlan = 'Free' }: AccountPlan) => {
  const mostPopular = name === 'Basic plan';
  const selected = selectedPlan === price;
  return (
    <StyledPlanCard selected={mostPopular}>
      <PlanPrice>{price}</PlanPrice>
      <PlanName>
        <span>{name}</span>
        <Status text="Your Current Plan" size="l" />
      </PlanName>
      <SelectedPlan>{selected ? 'Plan will end in 247 days (17 aug)' : ''}</SelectedPlan>
      <PlanPropertiesContainer>
        {Object.keys(properties).map(prop => (
          <PropertiesBlock key={properties[prop].displayName}>
            {properties[prop].displayName}
            {properties[prop].properties.map(item => (
              <Property {...item} key={item.name} />
            ))}
          </PropertiesBlock>
        ))}
      </PlanPropertiesContainer>
    </StyledPlanCard>
  );
};
