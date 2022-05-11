import { memo, useEffect } from 'react';

import { Redirect } from 'react-router-dom';

import { EnterGuide } from 'app/components/enter-guide';
import { FundsList } from 'app/components/funds-list';
import { useNotifier } from 'hooks/use-notifier';
import { getCookie } from 'utils/cookie';

import { useLogin } from '../login/hooks';
import { SpaceChart } from '../space-map/components/space-chart';
import { DetailCard } from './detail-card';
import { useMainPageHistory } from './hooks';

export const MainPage = memo(() => {
  useMainPageHistory();
  useNotifier();
  const { isAuth, setAuth } = useLogin();
  const token = getCookie('token');

  useEffect(() => {
    if (token) setAuth({ isAuth: true });
  }, [setAuth, token]);

  if (!isAuth && !token) return <Redirect to="/login" />;

  return (
    <>
      <EnterGuide />
      <SpaceChart />
      <FundsList />
      <DetailCard />
    </>
  );
});
