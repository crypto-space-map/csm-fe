import { StarIcon } from 'assets';

import { FavoriteTooltip } from '../favorite-tooltip';
import { CompanyTiker, RankWrapper, RankText, ButtonsControl } from './styles';

interface ExtraInfoProps {
  symbol?: string;
  rank?: number;
}

export const ExtraInfo = ({ symbol, rank }: ExtraInfoProps) => (
  <>
    <CompanyTiker>{symbol?.toUpperCase() ?? ''}</CompanyTiker>
    {rank && (
      <RankWrapper>
        <StarIcon />
        <RankText>{`Rank ${rank}`}</RankText>
      </RankWrapper>
    )}
    <ButtonsControl>
      <FavoriteTooltip />
    </ButtonsControl>
  </>
);

ExtraInfo.defaultProps = {
  symbol: '',
  rank: 0,
};
