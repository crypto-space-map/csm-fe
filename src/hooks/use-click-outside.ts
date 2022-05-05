import { RefObject, useEffect, useCallback } from 'react';

type Handler = (event: MouseEvent) => void;

const actions: Array<keyof DocumentEventMap> = ['mousedown', 'click'];

export function useOnClickOutside(ref: RefObject<HTMLElement>, handler: Handler, mustSkip?: boolean): void {
  const handleClick = useCallback(
    (event: UIEvent | Event) => {
      if (mustSkip) return;
      const el = ref?.current;
      if (!el || el.contains(event.target as Node)) {
        return;
      }
      handler(event as unknown as MouseEvent);
    },
    [handler, ref, mustSkip]
  );

  useEffect(() => {
    actions.forEach(evt => document.addEventListener(evt, handleClick));

    return () => {
      actions.forEach(evt => document.removeEventListener(evt, handleClick));
    };
  }, [handleClick]);
}
