import { useEffect, useState, useMemo } from 'react';

import { TemplateProps, LinesType } from '../../../types';
import { BlockDescription } from '../../block-description';
import { SpacemanWithLine } from '../../spaceman-with-line';
import { BlockDescriptionWrapper } from './styles';

const lineTop = 80;
const lineLeft = 95;
const absoluteSpaceManTopExtra = 498;
const absoluteSpaceManLeftExtra = 350;

export const Filter = ({ setSizeOptions, ...rest }: TemplateProps) => {
  const [absoluteOptions, setAbsoluteOptions] = useState({ top: 0, left: 0 });
  const isHide = useMemo(() => absoluteOptions.top === 0 && absoluteOptions.left === 0, [absoluteOptions]);
  useEffect(() => {
    const filterButton = document.getElementById('filter-button');
    filterButton?.click();
    filterButton?.classList.add('hovered');

    return () => {
      filterButton?.click();
      filterButton?.classList.remove('hovered');
    };
  }, []);

  useEffect(() => {
    const searchBlock = document.getElementById('search-block');
    const { left = 0, top = 0 } = searchBlock?.getBoundingClientRect() ?? {};

    const filterBlock = document.getElementById('filter-block');
    const { right = 0, bottom = 0 } = filterBlock?.getBoundingClientRect() ?? {};
    setSizeOptions({ top, bottom, left, right });
    setAbsoluteOptions({ top, left });
  }, [setSizeOptions]);

  return (
    <>
      <BlockDescriptionWrapper left={absoluteOptions.left}>
        <BlockDescription headerText="Search and Filters" {...rest}>
          <span>Find Project by name or ticker, or filter them out.</span>
          <span>
            You can combine Filters with the next step. Spoiler: there will be more filters. A lot more
          </span>
        </BlockDescription>
      </BlockDescriptionWrapper>

      <SpacemanWithLine
        isHide={isHide}
        lineTop={lineTop}
        lineLeft={lineLeft}
        top={absoluteOptions.top + absoluteSpaceManTopExtra}
        left={absoluteOptions.left - absoluteSpaceManLeftExtra}
        lineType={LinesType.FILTER}
      />
    </>
  );
};
