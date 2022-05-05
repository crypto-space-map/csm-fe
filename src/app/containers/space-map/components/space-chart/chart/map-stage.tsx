import { useEffect, useState } from 'react';

import { KonvaEventObject } from 'konva/lib/Node';
import { Stage, StageProps } from 'react-konva';

import { useDebounce } from 'hooks/use-debounce';

export const MapStage = ({ children, handleSetScale, ...rest }: StageProps) => {
  const [state, setState] = useState({
    stageScale: 1,
    stageX: 0,
    stageY: 0,
  });

  const handleWheel = (e: KonvaEventObject<WheelEvent>) => {
    e.evt.preventDefault();

    const scaleBy = 1.15;
    const stage = e.target.getStage();
    if (stage) {
      const position = stage.getPointerPosition();
      if (position) {
        const oldScale = stage.scaleX();
        const mousePointTo = {
          x: position.x / oldScale - stage.x() / oldScale,
          y: position.y / oldScale - stage.y() / oldScale,
        };

        const newScale = e.evt.deltaY > 0 ? oldScale / scaleBy : oldScale * scaleBy;
        setState({
          stageScale: newScale,
          stageX: -(mousePointTo.x - position.x / newScale) * newScale,
          stageY: -(mousePointTo.y - position.y / newScale) * newScale,
        });
      }
    }
  };

  const scaled = useDebounce(state.stageScale, 300);

  useEffect(() => {
    if (scaled === state.stageScale) {
      handleSetScale(state.stageScale);
    }
  }, [handleSetScale, scaled, state.stageScale]);

  return (
    <Stage
      alpha={false}
      draggable
      onWheel={handleWheel}
      scaleX={state.stageScale}
      scaleY={state.stageScale}
      x={state.stageX}
      y={state.stageY}
      {...rest}>
      {children}
    </Stage>
  );
};
