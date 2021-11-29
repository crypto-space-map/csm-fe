import { Highlighter } from './highliter';
import { ListItemSymbol, StyledListItem } from './styled';
import { ListItemProps } from './types';

export const ListItem = <T,>({ onClick, value, children, highLight, symbol }: ListItemProps<T>) => {
  const handleChange = () => onClick(value);
  return (
    <StyledListItem onClick={handleChange} onChange={handleChange}>
      <img
        src="https://lh3.googleusercontent.com/M4JSJRXqROAuFO1RGSDkoVYSmk5_04WsGG1aAt9UnJOXl-kpq3JYR2oSmD2nUqshJXE=w300"
        alt="list-ico"
      />
      {highLight ? (
        <>
          <Highlighter coloredValue={highLight} item={children} i={1} />
          {symbol && <ListItemSymbol>{symbol}</ListItemSymbol>}
        </>
      ) : (
        <>
          {children}
          {symbol && <ListItemSymbol>{symbol}</ListItemSymbol>}
        </>
      )}
    </StyledListItem>
  );
};
