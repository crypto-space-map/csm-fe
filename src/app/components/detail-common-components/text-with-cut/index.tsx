import { useMemo } from 'react';

import { Tooltip } from 'common/components';

import { StyledText } from './styles';

interface TextWithCutProps {
  id: string;
  text: string;
}

export const TextWithCut = ({ id, text }: TextWithCutProps) => {
  const tooltipId = useMemo(() => `${id}_${text}`, [id, text]);

  return (
    <>
      <StyledText data-tip={text} data-for={tooltipId}>
        {text}
      </StyledText>
      <Tooltip id={tooltipId} />
    </>
  );
};
