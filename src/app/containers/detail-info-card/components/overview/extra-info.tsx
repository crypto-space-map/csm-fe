import { ShowMoreText, MarkDown } from 'common/components';

import { OverviewExtraDataProps } from '../../types';
import { ContractItem } from './contract-item';
import {
  StyledProjectInfoWrapper,
  StyledCategoryWrapper,
  ContractsWrapper,
  StyledCategory,
  ContractsHeader,
} from './styles';

export const ExtraInfo = ({ description = '', category = '', explorers }: OverviewExtraDataProps) => (
  <>
    <StyledProjectInfoWrapper>
      <ShowMoreText width={440}>
        <MarkDown text={description} />
      </ShowMoreText>
      <StyledCategoryWrapper>
        <span>Category:</span>
        <div>
          <StyledCategory label={category} />
        </div>
      </StyledCategoryWrapper>
    </StyledProjectInfoWrapper>
    <ContractsWrapper>
      <ContractsHeader>
        <span>Smart Contracts:</span>
      </ContractsHeader>
      {explorers.map(item => (
        <ContractItem key={`ContractItem${item}`} address={item} />
      ))}
    </ContractsWrapper>
  </>
);
