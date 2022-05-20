import { useEffect, useState, useMemo } from 'react';

import { useHistory } from 'react-router-dom';

import { useSetNewProject } from 'hooks/use-set-new-project';
import { setSessionStorageItem, ItemNames, clearSessionStorageItems } from 'utils/session-storage';

import { TemplateProps, LinesType } from '../../../types';
import { BlockDescription } from '../../block-description';
import { SpacemanWithLine } from '../../spaceman-with-line';
import { BlockDescriptionWrapper } from './styles';

const projectId = 'xdefi';
const extra = 10;
const cardWidth = 664;
const topExtra = 120;
const lineTop = 0;
const lineLeft = -30;
const absoluteSpaceManTopExtra = 350;
const absoluteSpaceManLeftExtra = 392;
const rotate = 20;

export const Card = ({ setSizeOptions, ...rest }: TemplateProps) => {
  const [absoluteOptions, setAbsoluteOptions] = useState({ top: 0, left: 0 });
  const isHide = useMemo(() => absoluteOptions.top === 0 && absoluteOptions.left === 0, [absoluteOptions]);
  const { handleSelectProduct } = useSetNewProject();
  const history = useHistory();

  useEffect(() => {
    setSessionStorageItem(ItemNames.SELECTED_TAB, 'partners');
    handleSelectProduct(projectId);
    return () => {
      clearSessionStorageItems([ItemNames.SELECTED_TAB]);
      history.goBack();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  useEffect(() => {
    const cardBlock = document.getElementById('card-block');
    cardBlock?.classList.add('transformed');

    const height = document.body.clientHeight;
    const width = document.body.clientWidth;
    const top = topExtra + extra;
    const bottom = height - extra;
    const left = width - cardWidth + extra;
    const right = width - extra;

    setSizeOptions({ top, bottom, left, right });
    setAbsoluteOptions({ top, left });
    return () => {
      cardBlock?.classList.remove('transformed');
    };
  }, [setSizeOptions]);

  return (
    <>
      <BlockDescriptionWrapper left={absoluteOptions.left}>
        <BlockDescription headerText="Project or Found Card" {...rest}>
          <span>
            Here you can find general info, more funds (not only from “Top 50”), more partners (not only from
            6 exchanges) and some more info we don`t need to introduce. Card can be rolled up or down.
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
        lineType={LinesType.CARD}
      />
    </>
  );
};
