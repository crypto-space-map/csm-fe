export const mapCords = [
  {
    type: 'Bitcoin',
    id: 'Bitcoin',
    properties: {
      name: 'Bitcoin',
      x: 150,
      y: 200,
    },
  },
  {
    type: 'Defi',
    id: 'Defi',
    properties: {
      name: 'Defi',
      x: 500,
      y: 250,
    },
  },
  {
    type: 'Hardware',
    id: 'Hardware',
    properties: {
      name: 'Hardware',
      x: 500,
      y: 300,
    },
  },
  {
    type: 'Socail network',
    id: 'Socail network',
    properties: {
      name: 'Socail network',
      x: 600,
      y: 200,
    },
  },
];

export const getLegendCords = (width: number) => ({
  x: width / 2,
  y: 100,
});
