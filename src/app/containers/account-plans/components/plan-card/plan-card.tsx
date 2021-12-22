import { DisableIcon, DoneIcon } from 'assets';
import { Button, ButtonProps, SVGWrapper } from 'common/components';

import { AccountPlan, PlanProps } from '../../types';
import {
  ButtonsBlock,
  PlanName,
  PlanPrice,
  PlanPropertiesContainer,
  PropertiesBlock,
  SelectedPlan,
  StyledPlanCard,
  StyledPlanStatus,
  StyledProperty,
} from './styled';

const Property = ({ isAllowed, name }: PlanProps['properties'][number]) => (
  <StyledProperty>
    <SVGWrapper>{isAllowed ? <DoneIcon /> : <DisableIcon />}</SVGWrapper>
    {name}
  </StyledProperty>
);

export const PlanCard = ({ name, price, properties, selectedPlan = 'Free version' }: AccountPlan) => {
  const mostPopular = name === 'Basic plan';
  const selected = selectedPlan === name;
  const statusText = selected ? 'Your Current Plan' : 'Most Popular';

  const btns = [
    {
      text: 'Purchase this plan',
      variant: 'contained',
      onClick: () => window.alert('Purchase this plan'),
    },
    {
      text: 'Try out for Free',
      variant: 'outlined',
      onClick: () => window.alert('Try out for Free'),
    },
  ];

  return (
    <StyledPlanCard selected={mostPopular}>
      <PlanPrice>{price}</PlanPrice>
      <PlanName>
        <span>{name}</span>
        {(selected || mostPopular) && (
          <StyledPlanStatus
            text={statusText}
            size="l"
            redColored={!selected && mostPopular}
            gradient={selected}
            variant={(mostPopular && 'text') || 'contained'}
          />
        )}
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
      <ButtonsBlock>
        {!selected &&
          btns.map(({ text, variant, onClick }) => (
            <Button variant={variant as ButtonProps['variant']} onClick={onClick} key={text}>
              {text}
            </Button>
          ))}
      </ButtonsBlock>
    </StyledPlanCard>
  );
};
