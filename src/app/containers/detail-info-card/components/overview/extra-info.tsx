import { Components } from 'react-markdown';

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

const customComponents: Components = { a: 'span' };

interface ExtraInfoProps extends OverviewExtraDataProps {
  handleCopyClick: (arg0: string) => void;
}

export const ExtraInfo = ({
  description = '',
  category = '',
  explorers,
  handleCopyClick,
}: ExtraInfoProps) => (
  <>
    <StyledProjectInfoWrapper>
      <ShowMoreText width={440}>
        <MarkDown text={description} customComponents={customComponents} />
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
        <span>Explorers:</span>
      </ContractsHeader>
      {explorers.map(item => (
        <ContractItem key={`ContractItem${item}`} address={item} handleCopyClick={handleCopyClick} />
      ))}
    </ContractsWrapper>
  </>
);
