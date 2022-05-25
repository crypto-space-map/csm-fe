import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

import { StarIcon } from 'assets';
import { LikeButton } from 'common/components/like-button';

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
      <Tooltip
        title={
          <>
            <span color="inherit">Tooltip with HTML</span>
            <span color="inherit">TooAnd heres</span>
            <input value="dsds" />
          </>
        }>
        <LikeButton liked={false} />
      </Tooltip>
    </ButtonsControl>
  </>
);

ExtraInfo.defaultProps = {
  symbol: '',
  rank: 0,
};
