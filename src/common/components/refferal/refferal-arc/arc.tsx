import React, { useEffect, useRef, useState } from 'react';

export type RefferalArcProps = React.CanvasHTMLAttributes<HTMLCanvasElement> & {
  percents: number;
  radius?: number;
};

export const RefferalArc = ({ percents, radius = 70, ...rest }: RefferalArcProps) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null | undefined>(null);

  React.useEffect(() => {
    setCtx(ref.current?.getContext('2d'));
  }, []);

  const calculatedValue = 1 - percents / 100;
  const startAngle = Math.PI / -1;
  const endAngle = -calculatedValue * Math.PI;
  const lineWidth = 12;

  const canvas = { height: radius + lineWidth * 2, width: radius * 2 + lineWidth * 2 };

  useEffect(() => {
    if (ctx) {
      ctx.beginPath();
      ctx.lineWidth = lineWidth;
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#A9F89D';
      ctx.arc(radius + lineWidth, radius + lineWidth, radius, startAngle, endAngle, false);
      ctx.stroke();
    }
  }, [ctx]);

  return <canvas {...canvas} ref={ref} {...rest} />;
};
