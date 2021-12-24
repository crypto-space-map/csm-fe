import { Highlighter } from './highliter';
import { ListItemSymbol, StyledListItem } from './styled';
import { ListItemProps } from './types';

export const ListItem = ({ children, highLight, symbol, icon, ...props }: ListItemProps) => (
  <StyledListItem {...props}>
    <img src={icon} alt={children + symbol} />
    <>
      {highLight ? <Highlighter coloredValue={highLight} item={children} i={1} /> : children}
      {symbol && <ListItemSymbol>{symbol}</ListItemSymbol>}
    </>
  </StyledListItem>
);
