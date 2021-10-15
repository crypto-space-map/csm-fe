import React from 'react';

import styled from '@emotion/styled';

import { RefferalArc } from './refferal-arc';

type RefferalProps = {
  percent: number;
  radius?: number;
  text: string;
};

const Counter = styled.span`
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
`;

const Text = styled.span`
  font-size: 16px;
  line-height: 22px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #ffffff;
`;

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: end;
  & ${Wrapper} {
    grid-area: 1/1/2/2;
  }
`;

const Arc = styled(RefferalArc)`
  grid-area: 1/1/2/2;
`;

export const Refferal = ({ percent, text, radius }: RefferalProps) => (
  <Container>
    <Wrapper>
      <Counter>{percent}</Counter>
      <Text>{text}</Text>
    </Wrapper>
    <Arc percents={percent} radius={radius} />
  </Container>
);

Refferal.defaultProps = {
  radius: 70,
};