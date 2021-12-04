import { useCallback } from 'react';

import { Button } from 'common/components/button';

import { StyledRefreshContent } from '../styles';
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
      <span>Error Uploading the Data</span>
      <Button onClick={handleClick}>Refresh Page</Button>
    </StyledRefreshContent>
  );
};
