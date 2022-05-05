import { useEffect, useState, useMemo } from 'react';

import { TemplateProps, LinesType } from '../../../types';
import { BlockDescription } from '../../block-description';
import { SpacemanWithLine } from '../../spaceman-with-line';
import { BlockDescriptionWrapper } from './styles';

const lineTop = -60;
const lineLeft = -160;
const absoluteSpaceManTopExtra = 70;
const absoluteSpaceManLeftExtra = 625;
const rotate = 20;

export const Account = ({ setSizeOptions, ...rest }: TemplateProps) => {
  const [absoluteOptions, setAbsoluteOptions] = useState({ top: 0, left: 0 });
  const isHide = useMemo(() => absoluteOptions.top === 0 && absoluteOptions.left === 0, [absoluteOptions]);

  useEffect(() => {
    const accountBlock = document.getElementById('account-block');
    const { left = 0, top = 0, bottom = 0, right = 0 } = accountBlock?.getBoundingClientRect() ?? {};

    setSizeOptions({ top, bottom, left, right });
    setAbsoluteOptions({ top, left });
  }, [setSizeOptions]);

  return (
    <>
      <BlockDescriptionWrapper left={absoluteOptions.left}>
        <BlockDescription headerText="Account" {...rest}>
          <span>
            In Personal account you may find your favorite projects, settings, news and development section
            etc.
          </span>
        </BlockDescription>
      </BlockDescriptionWrapper>

      <SpacemanWithLine
        isHide={isHide}
        lineTop={lineTop}
        lineLeft={lineLeft}
        top={absoluteOptions.top + absoluteSpaceManTopExtra}
        left={absoluteOptions.left - absoluteSpaceManLeftExtra}
        rotate={rotate}
        lineType={LinesType.ACCOUNT}
      />
    </>
  );
};
