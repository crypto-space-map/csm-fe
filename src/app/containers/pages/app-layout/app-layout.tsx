import { memo } from 'react';

import { Footer } from 'app/components/app-layout/footer';
import { Header } from 'app/components/app-layout/header';

import { AppContainer } from './styled';

export const AppLayout = memo(({ children }) => (
  <AppContainer>
    <Header />
    {children}
    <Footer />
  </AppContainer>
));
