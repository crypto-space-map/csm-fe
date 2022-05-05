import { useEffect, useState, useMemo } from 'react';

import { useDispatchAction } from 'app/containers/space-map/slice';

import { TemplateProps, LinesType } from '../../../types';
import { BlockDescription } from '../../block-description';
import { SpacemanWithLine } from '../../spaceman-with-line';
import { BlockDescriptionWrapper } from './styles';

const bottomExtra = 30;
const leftExtra = 1070;
const lineTop = -400;
const lineLeft = -225;
const absoluteSpaceManTopExtra = 439;
const absoluteSpaceManLeftExtra = 510;
const scale = -1;
const rotate = 0;

export const Range = ({ setSizeOptions, ...rest }: TemplateProps) => {
  const [absoluteOptions, setAbsoluteOptions] = useState({ top: 0, left: 0 });
  const isHide = useMemo(() => absoluteOptions.top === 0 && absoluteOptions.left === 0, [absoluteOptions]);

  const { setFilters } = useDispatchAction();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  useEffect(() => {
    setFilters({ partnersWeight: [30] });
    return () => setFilters({ partnersWeight: [] });
  }, [setFilters]);

  useEffect(() => {
    const accountBlock = document.getElementById('range-block');
    const { top = 0, right = 0, left = 0 } = accountBlock?.getBoundingClientRect() ?? {};
    const bottom = top + bottomExtra;

    setSizeOptions({ top, bottom, left, right });
    setAbsoluteOptions({ top, left });
  }, [setSizeOptions]);

  return (
    <>
      <BlockDescriptionWrapper left={absoluteOptions.left}>
        <BlockDescription headerText="Connections" {...rest}>
          <span>
            Connections means the number of links between the project with other projects and investors. F.e.
            the yellow sphere on the map means that this project has from 30 to 39 partnerships/investors in
            total.
          </span>
        </BlockDescription>
      </BlockDescriptionWrapper>

      <SpacemanWithLine
        scale={scale}
        rotate={rotate}
        isHide={isHide}
        lineTop={lineTop}
        lineLeft={lineLeft}
        top={absoluteOptions.top + absoluteSpaceManTopExtra}
        left={absoluteOptions.left + absoluteSpaceManLeftExtra}
        lineType={LinesType.RANGE}
      />
    </>
  );
};
