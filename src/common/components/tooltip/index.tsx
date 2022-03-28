import { Tooltip as MuiTooltip } from '@mui/material';
import { TooltipProps } from '@mui/material/Tooltip';

export const Tooltip = (props: TooltipProps) => <MuiTooltip {...props} arrow placement="bottom" />;
