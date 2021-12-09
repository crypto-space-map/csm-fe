import { useCallback, useMemo, useState, useEffect } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';

import { infiniteScrollTarget, getHasMoreFlag } from '../../utils';
import { EndMessage } from './end-message';
import { Loader } from './loader';

interface InfiniteScrollComponentProps {
  count: number;
  loading?: boolean;
  fetchData: (page: number) => void;
}

export const InfiniteScrollComponent: React.FC<InfiniteScrollComponentProps> = ({
  count,
  loading,
  fetchData,
  children,
}) => {
  const [page, setPage] = useState(1);

  const hasMore = useMemo(() => getHasMoreFlag(count, page), [count, page]);

  const setPageNumber = useCallback(() => {
    setPage(page + 1);
  }, [setPage, page]);

  useEffect(() => {
    if (fetchData && page !== 1) {
      fetchData(page);
    }
  }, [fetchData, page]);

  if (page === 1 && loading) {
    return <Loader />;
  }

  return (
    <InfiniteScroll
      dataLength={count}
      next={setPageNumber}
      hasMore={hasMore}
      loader={<Loader />}
      scrollableTarget={infiniteScrollTarget}
      endMessage={<EndMessage />}>
      {children}
    </InfiniteScroll>
  );
};
