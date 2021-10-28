import React, { memo } from 'react';

import { Header } from 'app/components/app-layout/header';

import { AppContainer } from './styled';

export const AppLayout = memo(({ children }) => (
  <AppContainer>
    <Header />
    {children}
  </AppContainer>
));
