import { CanvasHTMLAttributes, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { COLOR_PALLETTE } from 'global/pallette';

export type RefferalArcProps = CanvasHTMLAttributes<HTMLCanvasElement> & {
  percents: number;
  radius?: number;
};

export const RefferalArc = ({ percents, radius = 70, ...rest }: RefferalArcProps) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const backgroundRef = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null | undefined>(null);
  const [backgroundCtx, setBackgroundCtx] = useState<CanvasRenderingContext2D | null | undefined>(null);

  useEffect(() => {
    setCtx(ref.current?.getContext('2d'));
    setBackgroundCtx(backgroundRef.current?.getContext('2d'));
  }, []);

  /**
   *  Current usage of calculated value is 1 = whole number(integer)
   *
   *  (percents / 100) - get a part as a percentage of an integer
   *
   *  output F.ex percentage = 48
   *
   *  second part of func = 48/100 = 0.48
   *  output calculatedValue = 1 - 0.48 = 0.52 ( this value will be subtracted like endAngle)
   * */

  const INTEGER = 1;
  const DIVIDER = 100;

  const calculatedValue = INTEGER - percents / DIVIDER;
  const startAngle = Math.PI / -1;
  const endAngle = -calculatedValue * Math.PI;
  const lineWidth = 12;

  const canvas = useMemo(
    () => ({ height: radius + lineWidth * 2, width: radius * 2 + lineWidth * 2 }),
    [radius]
  );

  const ctxRender = useCallback(
    (context: CanvasRenderingContext2D, fullWidth = null) => {
      context.beginPath();
      context.lineWidth = lineWidth;
      context.lineCap = 'round';
      context.strokeStyle = fullWidth ? COLOR_PALLETTE.MAIN_LAYOUT : COLOR_PALLETTE.MAIN_GREEN;
      context.arc(radius + lineWidth, radius + lineWidth, radius, startAngle, fullWidth || endAngle, false);
      context.stroke();
    },
    [radius, startAngle, endAngle]
  );

  useEffect(() => {
    if (ctx && backgroundCtx) {
      ctxRender(ctx);
      ctxRender(backgroundCtx, '-0');
    }
  }, [backgroundCtx, ctx, ctxRender, endAngle, radius, startAngle]);

  return (
    <>
      <canvas {...canvas} ref={backgroundRef} {...rest} /> <canvas {...canvas} ref={ref} {...rest} />
    </>
  );
};
