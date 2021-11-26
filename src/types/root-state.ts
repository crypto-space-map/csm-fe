import { DetailInfoState } from 'app/containers/detail-info-card/types';
import { SpaceMapPageState } from 'app/containers/pages/ space-map/types';
import { LoginPageState } from 'app/containers/pages/login/types';

/*
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  user: LoginPageState;
  datailInfo: DetailInfoState;
  spaceMapData: SpaceMapPageState;
}
