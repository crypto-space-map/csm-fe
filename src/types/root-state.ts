import { DetailInfoState } from 'app/containers/detail-info-card/types';
import { LoginPageState } from 'app/containers/login/types';
import { SpaceMapPageState } from 'app/containers/space-map/types';

/*
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  user: LoginPageState;
  datailInfo: DetailInfoState;
  spaceMapData: SpaceMapPageState;
}
