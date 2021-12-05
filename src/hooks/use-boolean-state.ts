import { useState, useCallback } from 'react';

export function useBooleanState(defaultValue = false) {
  const [value, setValue] = useState(defaultValue);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  return [value, setTrue, setFalse];
}
