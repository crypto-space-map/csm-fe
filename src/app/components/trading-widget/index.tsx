import { useRef, useEffect, useState, useCallback } from 'react';

import { scriptSRC, widgetOptions, containerId } from './constants';
import { TradingWidgetProps } from './types';

declare const TradingView: { widget: new (arg0: TradingWidgetProps) => void };

export const TradingWidget = ({ symbol }: { symbol: string }): JSX.Element => {
  const [scriptElement, setScriptElement] = useState<HTMLScriptElement | null>(null);
  const [scriptIsLoaded, setScriptIsLoaded] = useState(false);
  const ref: { current: HTMLDivElement | null } = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const script = document.createElement('script');
      script.src = scriptSRC;
      script.async = true;
      script.type = 'text/javascript';
      setScriptElement(script);
    }
  }, [ref]);

  const setWidget = useCallback(
    (newSymbol: string) => {
      if (scriptElement) {
        scriptElement.innerHTML = JSON.stringify(
          // eslint-disable-next-line new-cap
          new TradingView.widget({ ...widgetOptions, container_id: containerId, symbol: newSymbol })
        );
      }
    },
    [scriptElement]
  );

  useEffect(() => {
    let refValue: HTMLDivElement;

    if (ref.current && scriptElement) {
      if (typeof TradingView !== undefined) {
        if (!scriptIsLoaded) {
          scriptElement.onload = () => {
            setWidget(symbol);
            setScriptIsLoaded(true);
          };
        } else {
          setWidget(symbol);
        }
      } else {
        scriptElement.innerHTML = JSON.stringify(widgetOptions);
      }
      ref.current.appendChild(scriptElement);
      refValue = ref.current;
    }
    return () => {
      if (refValue) {
        while (refValue.firstChild) {
          refValue.removeChild(refValue.firstChild);
        }
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, scriptElement, symbol]);

  return <div ref={ref} id={containerId} />;
};
