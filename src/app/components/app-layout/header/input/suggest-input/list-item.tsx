import { IconPlug } from 'common/components/icon-plug';

import { Highlighter } from './highliter';
import { ListItemSymbol, StyledListItem } from './styled';
import { ListItemProps } from './types';

export const ListItem = ({ children, highLight, symbol, icon, ...props }: ListItemProps) => (
  <StyledListItem {...props}>
    {icon ? <img src={icon} alt={children + symbol} /> : <IconPlug text={children} />}
    <>
      {highLight ? <Highlighter coloredValue={highLight} item={children} i={1} /> : children}
      {symbol && <ListItemSymbol>{symbol}</ListItemSymbol>}
    </>
  </StyledListItem>
);
