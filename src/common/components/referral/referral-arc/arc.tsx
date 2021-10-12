import React from 'react';

const getCircleLength = (radius: number) => Math.PI * radius * 2;

type ReferralArcProps = React.SVGAttributes<HTMLOrSVGElement> & {
  percents: number;
  radius?: number;
};

export const ReferralArc = ({ percents, radius = 70, ...rest }: ReferralArcProps) => {
  const dashArray = getCircleLength(radius);
  const strokeDashOffset = dashArray - dashArray * (percents / 2 / 100);
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 180 180"
      {...rest}>
      <g transform="rotate(-180 90 100)">
        <circle
          vectorEffect="non-scaling-stroke"
          cx="50%"
          cy="60%"
          r={radius}
          stroke="#A9F89D"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={dashArray}
          strokeDashoffset={strokeDashOffset}
        />
      </g>
    </svg>
  );
};

ReferralArc.defaultProps = {
  radius: 70,
};
