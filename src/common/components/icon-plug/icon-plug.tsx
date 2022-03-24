export const IconPlug = ({ text = '' }) => {
  const trimmedText = text[0].toUpperCase();
  return (
    <svg viewBox="0 0 24 24" height={24} width={24}>
      <circle fill="url(#csm_icon_gradient)" r={12} cx={12} cy={12} />
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize={16}>
        {trimmedText}
      </text>
    </svg>
  );
};
