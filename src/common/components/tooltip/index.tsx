import { TooltipProps } from '@mui/material/Tooltip';

import { StyledTooltip } from './styles';

export const Tooltip = (props: TooltipProps) => <StyledTooltip {...props} arrow placement="bottom" />;
