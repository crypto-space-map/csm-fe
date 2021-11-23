import { createRef, useEffect } from 'react';

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
  const ref: { current: HTMLDivElement | null } = createRef();

  useEffect(() => {
    let refValue: HTMLDivElement;

    if (ref.current) {
      const script = document.createElement('script');
      script.src = scriptSRC;
      script.async = true;
      script.type = 'text/javascript';

      if (typeof TradingView !== undefined) {
        script.onload = () => {
          script.innerHTML = JSON.stringify(
            // eslint-disable-next-line new-cap
            new TradingView.widget({ ...widgetOptions, container_id: containerId, symbol })
          );
        };
      } else {
        script.innerHTML = JSON.stringify(widgetOptions);
      }
      ref.current.appendChild(script);
      refValue = ref.current;
    }
    return () => {
      if (refValue) {
        while (refValue.firstChild) {
          refValue.removeChild(refValue.firstChild);
        }
      }
    };
  }, [ref, widgetOptions, containerId, scriptSRC, symbol]);

  return <div ref={ref} id={containerId} />;
};
