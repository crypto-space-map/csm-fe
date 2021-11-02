import { CanvasHTMLAttributes, useEffect, useMemo, useRef, useState } from 'react';

export type RefferalArcProps = CanvasHTMLAttributes<HTMLCanvasElement> & {
  percents: number;
  radius?: number;
};

export const RefferalArc = ({ percents, radius = 70, ...rest }: RefferalArcProps) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null | undefined>(null);

  useEffect(() => {
    setCtx(ref.current?.getContext('2d'));
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

  useEffect(() => {
    if (ctx) {
      ctx.beginPath();
      ctx.lineWidth = lineWidth;
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#A9F89D';
      ctx.arc(radius + lineWidth, radius + lineWidth, radius, startAngle, endAngle, false);
      ctx.stroke();
    }
  }, [ctx, endAngle, radius, startAngle]);

  return <canvas {...canvas} ref={ref} {...rest} />;
};
