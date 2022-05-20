import Grow from '@mui/material/Grow';
import { useHistory } from 'react-router';

import { OutlinedArrow } from 'assets/icons';
import { CsmLogoColoured } from 'assets/images';
import { Button } from 'common/components/button';
import { SVGWrapper } from 'common/components/svg-wrapper/svg-wrapper';
import { getCookie } from 'utils/cookie';

import { FormContainer } from '../forms/form-container';
import { ContentContainer, StyledLoginPage } from './styled';

export const LoginPage = () => {
  const { push: historyPush } = useHistory();
  // const token = getCookie('token');
  const handleClick = () => {
    historyPush('/');
  };
  return (
    <Grow in>
      <StyledLoginPage>
        <ContentContainer>
          <Button variant="outlined" onClick={handleClick}>
            <SVGWrapper fill="url(#csm_icon_gradient)">
              <OutlinedArrow />
            </SVGWrapper>
            Back to Site
          </Button>
          <CsmLogoColoured />
          <FormContainer />
        </ContentContainer>
      </StyledLoginPage>
    </Grow>
  );
};
