import { useEffect, useState, useMemo } from 'react';

import { TemplateProps, LinesType } from '../../../types';
import { BlockDescription } from '../../block-description';
import { SpacemanWithLine } from '../../spaceman-with-line';
import { BlockDescriptionWrapper } from './styles';

const top = 100;
const left = 200;
const bottomExtra = 200;
const rightExtra = 682;
const lineTop = 70;
const lineLeft = -130;
const absoluteSpaceManTopExtra = 355;
const absoluteSpaceManLeftExtra = 136;
const rotate = -15;
const scale = -1;

export const Map = ({ setSizeOptions, ...rest }: TemplateProps) => {
  const [absoluteOptions, setAbsoluteOptions] = useState({ top: 0, right: 0 });
  const isHide = useMemo(() => absoluteOptions.top === 0 && absoluteOptions.right === 0, [absoluteOptions]);

  useEffect(() => {
    const height = document.body.clientHeight;
    const width = document.body.clientWidth;

    const bottom = height - bottomExtra;
    const right = width - rightExtra;

    setSizeOptions({ top, bottom, left, right });
    setAbsoluteOptions({ top, right });
    return () => setSizeOptions(null);
  }, [setSizeOptions]);

  return (
    <>
      <BlockDescriptionWrapper right={absoluteOptions.right}>
        <BlockDescription headerText="Map" {...rest}>
          <span>
            On the Map we placed projects categorized by their main function. Color means the number of
            Connections, size means current mcap. Click on any sphere shows connections with partners,
            investors and opens the project’s card with detailed info about the project.
          </span>
        </BlockDescription>
      </BlockDescriptionWrapper>

      <SpacemanWithLine
        isHide={isHide}
        lineTop={lineTop}
        lineLeft={lineLeft}
        top={absoluteOptions.top + absoluteSpaceManTopExtra}
        left={absoluteOptions.right + absoluteSpaceManLeftExtra}
        rotate={rotate}
        scale={scale}
        lineType={LinesType.MAP}
      />
    </>
  );
};
