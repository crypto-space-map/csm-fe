import { useCallback } from 'react';

import { Button } from 'common/components/button';

import { StyledRefreshContent, MainAdditionalText, ButtonWrapper } from '../styles';
import { FetchDataType } from '../types';

interface RefreshContentProps {
  fetchData: FetchDataType;
}

export const RefreshContent = ({ fetchData }: RefreshContentProps) => {
  const handleClick = useCallback(() => {
    fetchData(1);
  }, [fetchData]);

  return (
    <StyledRefreshContent>
      <MainAdditionalText>Error Uploading the Data</MainAdditionalText>
      <ButtonWrapper>
        <Button onClick={handleClick}>Refresh Page</Button>
      </ButtonWrapper>
    </StyledRefreshContent>
  );
};
