import { Highlighter } from './highliter';
import { StyledListItem } from './styled';
import { ListItemProps } from './types';

export const ListItem = <T,>({ onClick, value, children, highLight }: ListItemProps<T>) => {
  const handleClick = () => onClick(value);
  return (
    <StyledListItem onClick={handleClick}>
      <picture>
        <img
          src="https://lh3.googleusercontent.com/M4JSJRXqROAuFO1RGSDkoVYSmk5_04WsGG1aAt9UnJOXl-kpq3JYR2oSmD2nUqshJXE=w300"
          alt="list-ico"
        />
      </picture>
      {highLight ? <Highlighter coloredValue={highLight} item={children} i={1} /> : <>{children}</>}
    </StyledListItem>
  );
};
