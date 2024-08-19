import React from 'react';
import { Chart, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement);

const fillSegmentsBackgroundPlugin = (color: string, cutout: number) => ({
  id: 'fillSegmentsBackgroundPlugin',
  beforeDraw: (chart: Chart<'doughnut'>) => {
    const {
      ctx,
      chartArea: { left, top, width, height },
    } = chart;
    const centerX = (left + width) / 2;
    const centerY = (top + height) / 2;
    const radius = Math.min(width, height) / 2;
    const innerRadius = (cutout / 100) * radius;

    ctx.save();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.arc(centerX, centerY, innerRadius, Math.PI * 2, 0, true);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  },
});

const textToCenterPlugin = (text: string, color: string, font: string) => ({
  id: 'textToCenterPlugin',
  beforeDraw: (chart: Chart<'doughnut'>) => {
    const { ctx, chartArea } = chart;

    ctx.save();
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const centerX = (chartArea.left + chartArea.right) / 2;
    const centerY = (chartArea.top + chartArea.bottom) / 2;

    ctx.fillText(text, centerX, centerY);
    ctx.restore();
  },
});

type Props = {
  value: number;
  progressColor?: string;
  fillColor?: string;
  cutout?: number;
  testId?: string;
};

export const DoughnutChart = ({
  value,
  progressColor = '#493DF5',
  fillColor = '#E8E9EB',
  cutout = 85,
  testId,
}: Props) => {
  return (
    <Doughnut
      data-testid={testId}
      data={{
        labels: ['Red', 'Blue'],
        datasets: [
          {
            data: [value, 100 - value],
            backgroundColor: [progressColor, fillColor],
            borderRadius: [50, 0],
            borderWidth: 0,
          },
        ],
      }}
      options={{
        cutout: `${cutout}%`,
        events: [],
        responsive: true,
      }}
      plugins={[
        fillSegmentsBackgroundPlugin(fillColor, cutout),
        textToCenterPlugin(`${value}%`, progressColor, '28px PulpDisplay-Bold'),
      ]}
    />
  );
};
