import { HighLight } from './styled';

const escapeRegExp = (str = '') => str.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');

export type HighlighterProps = {
  item: string;
  coloredValue: string;
  i: number;
};

export const Highlighter = ({ item, coloredValue }: HighlighterProps) => {
  if (item && coloredValue) {
    const regex = new RegExp(`(${escapeRegExp(coloredValue)})`, 'gi');
    const parts = item.split(regex);
    return (
      <span>
        {parts
          .filter(part => part)
          .map((part, i) =>
            regex.test(part) ? (
              <HighLight key={`part-${part + i}`}>{part}</HighLight>
            ) : (
              <span key={`part-${part + i}`}>{part}</span>
            )
          )}
      </span>
    );
  }

  return <>{item}</>;
};
