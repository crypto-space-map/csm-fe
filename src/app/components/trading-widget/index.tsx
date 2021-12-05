import { useRef, useEffect, useState } from 'react';

import { TradingWidgetProps } from './types';

declare const TradingView: { widget: new (arg0: TradingWidgetProps) => void };

export const TradingWidget = ({
  scriptSRC,
  containerId,
  widgetOptions,
  symbol,
}: {
  scriptSRC: string;
  containerId: string;
  symbol: string;
  widgetOptions: TradingWidgetProps;
}): JSX.Element => {
  const [scriptElement, setScriptElement] = useState<HTMLScriptElement | null>(null);
  const ref: { current: HTMLDivElement | null } = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const script = document.createElement('script');
      script.src = scriptSRC;
      script.async = true;
      script.type = 'text/javascript';
      setScriptElement(script);
    }
  }, [ref, scriptSRC]);

  useEffect(() => {
    let refValue: HTMLDivElement;

    if (ref.current && scriptElement) {
      if (typeof TradingView !== undefined) {
        scriptElement.onload = () => {
          scriptElement.innerHTML = JSON.stringify(
            // eslint-disable-next-line new-cap
            new TradingView.widget({ ...widgetOptions, container_id: containerId, symbol })
          );
        };
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
  }, [ref, scriptElement, widgetOptions, containerId, symbol]);

  return <div ref={ref} id={containerId} />;
};
