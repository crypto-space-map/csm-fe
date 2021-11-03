import { useEffect, useRef } from 'react';

import * as am5 from '@amcharts/amcharts5';
import * as am5venn from '@amcharts/amcharts5/venn';

type UseChartProps = {
  elementId: string;
  enableTooltip?: boolean;
  data: Array<{
    name: string;
    value: number;
    sets?: UseChartProps['data'][number]['name'][];
  }>;
};

export const useChart = ({ elementId, data, enableTooltip = false }: UseChartProps) => {
  const ref = useRef<am5venn.Venn | null>(null);

  useEffect(() => {
    const root = am5.Root.new(elementId);

    const container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.p100,
        height: am5.p100,
        layout: root.verticalLayout,
      })
    );

    const chart = container.children.push(
      am5venn.Venn.new(root, {
        categoryField: 'name',
        valueField: 'value',
        intersectionsField: 'sets',
        fillField: 'color',
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 40,
        paddingRight: 40,
      })
    );

    chart.labels.template.setAll({
      fill: am5.color(0xffffff),
      text: '{category}',
      position: 'absolute',
    });
    chart.data.setAll(data.map(item => ({ ...item, color: am5.color('rgb(255 255 255 / 0%)') })));

    if (enableTooltip) {
      chart.slices.template.set('tooltipText', '{category}: {value}');
    }

    // Set up hover appearance
    chart.hoverGraphics.setAll({
      strokeDasharray: [3, 3],
      stroke: am5.color(0xffffff),
      strokeWidth: 2,
    });

    // Add legend
    // let legend = container.children.push(
    //   am5.Legend.new(root, {
    //     centerX: am5.p50,
    //     x: am5.p50,
    //   })
    // );
    // legend.data.setAll(chart.dataItems);

    ref.current = chart;

    return () => {
      chart.dispose();
    };
  }, [elementId, data, enableTooltip]);
};
