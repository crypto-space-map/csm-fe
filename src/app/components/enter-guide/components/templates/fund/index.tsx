import { useEffect, useState, useMemo } from 'react';

import { useHistory } from 'react-router-dom';

import { useSetNewProject } from 'hooks/use-set-new-project';

import { TemplateProps, LinesType, SizeOptionsTypes } from '../../../types';
import { BlockDescription } from '../../block-description';
import { BorderBlock } from '../../border-block';
import { SpacemanWithLine } from '../../spaceman-with-line';
import { BlockDescriptionWrapper } from './styles';

// card constants
const cardExtra = 10;
const cardWidth = 664;
const topExtra = 120;
const extraForLine = 3;

// fund constants
const fundId = '2f8358e8-f4ea-4af3-a6b2-ade100a565e2';
const lineTop = 35;
const lineLeft = -270;
const absoluteSpaceManTopExtra = 190;
const absoluteSpaceManLeftExtra = 456;
const rotate = -20;
const scale = -1;

export const Fund = ({ setSizeOptions, ...rest }: TemplateProps) => {
  const [absoluteOptions, setAbsoluteOptions] = useState({ top: 0, left: 0, right: 0 });
  const [cardSizeOptions, setCardSizeOptions] = useState<SizeOptionsTypes | null>(null);

  const isHide = useMemo(() => absoluteOptions.top === 0 && absoluteOptions.left === 0, [absoluteOptions]);
  const { handleSelectFund } = useSetNewProject();
  const history = useHistory();

  useEffect(() => {
    handleSelectFund(fundId);
    return () => {
      setSizeOptions(null);
      history.goBack();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  useEffect(() => {
    const cardBlock = document.getElementById('card-block');
    cardBlock?.classList.add('transformed');

    const height = document.body.clientHeight;
    const width = document.body.clientWidth;
    const top = topExtra + cardExtra - extraForLine;
    const bottom = height - cardExtra;
    const left = width - cardWidth + cardExtra - extraForLine;
    const right = width - cardExtra;

    setCardSizeOptions({ top, bottom, left, right });

    return () => {
      cardBlock?.classList.remove('transformed');
    };
  }, []);

  useEffect(() => {
    const accountBlock = document.getElementById('fund-block');
    const { top = 0, bottom = 0, left = 0, right = 0 } = accountBlock?.getBoundingClientRect() ?? {};

    setSizeOptions({ top, bottom, left, right });
    setAbsoluteOptions({ top, right, left });
  }, [setSizeOptions]);

  return (
    <>
      <BorderBlock options={cardSizeOptions} />
      <BlockDescriptionWrapper right={absoluteOptions.right}>
        <BlockDescription headerText="We selected the “Top 50 funds”" {...rest}>
          <span>
            For quick access to show the projects on the map they are invested in. The rest of the projects
            each fund invested in can be found in Fund’s card (they are not on the map because they are not
            listed on 6 exchanges or with no token yet)
          </span>
        </BlockDescription>
      </BlockDescriptionWrapper>

      <SpacemanWithLine
        isHide={isHide}
        lineTop={lineTop}
        lineLeft={lineLeft}
        top={absoluteOptions.top + absoluteSpaceManTopExtra}
        left={absoluteOptions.left + absoluteSpaceManLeftExtra}
        rotate={rotate}
        scale={scale}
        lineType={LinesType.FUND}
      />
    </>
  );
};
