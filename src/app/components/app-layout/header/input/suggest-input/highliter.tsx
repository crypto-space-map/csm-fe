import { HighLight } from './styled';

export type HighlighterProps = {
  item: string;
  coloredValue: string;
  i: number;
};

export const Highlighter = ({ item, coloredValue, i }: HighlighterProps) => {
  if (item && coloredValue) {
    let splitString: string[] = item.replace(coloredValue, `/${coloredValue}/`).split('/');

    return (
      <span key={`span-highlight-${i}`}>
        {splitString.map(part =>
          part === coloredValue ? <HighLight key={`part-${i}`}>{part}</HighLight> : part
        )}
      </span>
    );
  }

  return <>{item}</>;
};
