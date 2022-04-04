import ReactTooltip from 'react-tooltip';

export const Tooltip = ({ id }: { id: string }) => (
  <ReactTooltip id={id} place="bottom" effect="solid" multiline={false} />
);
