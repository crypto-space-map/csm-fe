import { RefObject, useEffect, useCallback } from 'react';

type Handler = (event: MouseEvent) => void;

export function useOnClickOutside(ref: RefObject<HTMLElement>, handler: Handler): void {
  const handleClick = useCallback(
    (event: MouseEvent) => {
      const el = ref?.current;
      if (!el || el.contains(event.target as Node)) {
        return;
      }
      handler(event as unknown as MouseEvent);
    },
    [handler, ref]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.addEventListener('mousedown', handleClick);
    };
  }, [handleClick]);
}
