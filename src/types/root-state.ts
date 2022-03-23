import { AccountPageStateDTO } from 'app/containers/account/types';
import { DetailFundState } from 'app/containers/detail-fund-card/types';
import { DetailInfoState } from 'app/containers/detail-info-card/types';
import { LoginPageState } from 'app/containers/login/types';
import { SpaceMapPageState } from 'app/containers/space-map/types';
import { PageTypesState } from 'store/pageStore/types';

/*
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  user: LoginPageState;
  detailInfo: DetailInfoState;
  detailFund: DetailFundState;
  account: AccountPageStateDTO;
  spaceMapData: SpaceMapPageState;
  pageStore: PageTypesState;
}
