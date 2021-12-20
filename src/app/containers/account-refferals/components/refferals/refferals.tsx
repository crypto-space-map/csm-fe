import { ContainerOverflow } from 'app/containers/account/components/action-block/styled';

import { RefferalCard } from './refferal-card';
import { StyledRefferalsBlock } from './styled';

const localDate = (date: string) =>
  new Date(date).toLocaleString('en-Us', { day: 'numeric', month: 'short', year: 'numeric' });

const _refferals = [
  { email: 'Manuel...@mail.com', registerDate: localDate(new Date().toISOString()) },
  { email: 'Manuel...@mail.com', registerDate: localDate(new Date().toISOString()) },
  { email: 'Manuel...@mail.com', registerDate: localDate(new Date().toISOString()) },
];

export const Refferals = () => (
  <StyledRefferalsBlock>
    <ContainerOverflow>
      {_refferals.map(item => (
        <RefferalCard key={item.registerDate} {...item} />
      ))}
    </ContainerOverflow>
  </StyledRefferalsBlock>
);
