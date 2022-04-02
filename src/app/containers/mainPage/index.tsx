import { memo, useEffect } from 'react';

import { Redirect } from 'react-router-dom';

import { FundsList } from 'app/components/funds-list';
import { useNotifier } from 'hooks/use-notifier';
import { useSetNewProject } from 'hooks/use-set-new-project';
import { getCookie } from 'utils/cookie';

import { useLogin } from '../login/hooks';
import { SpaceChart } from '../space-map/components/space-chart';
import { DetailCard } from './detail-card';
import { useMainPage, useMainPageHistory } from './hooks';

export const MainPage = memo(() => {
  useMainPageHistory();
  useNotifier();
  const { setPointsCoords, clearPointsCoords } = useMainPage();
  const { isAuth, setAuth } = useLogin();
  const { handleSelectProduct, handleSelectFund } = useSetNewProject();
  const token = getCookie('token');

  useEffect(() => {
    if (token) setAuth({ isAuth: true });
  }, [setAuth, token]);

  if (!isAuth && !token) return <Redirect to="/login" />;

  return (
    <>
      <SpaceChart handleSelectProduct={handleSelectProduct} />
      <FundsList
        handleSelectFund={handleSelectFund}
        setPointsCoords={setPointsCoords}
        clearPointsCoords={clearPointsCoords}
      />
      <DetailCard />
    </>
  );
});
