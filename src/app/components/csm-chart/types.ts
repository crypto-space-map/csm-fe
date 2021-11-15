import { RefObject } from 'react';

import { Selection, SimulationNodeDatum } from 'd3';

type Sizing = {
  width: number;
  height: number;
};

export type PackType = Sizing & {
  data: CryptoObject /* Need to type it */;
};

export type BaseMapParams = Sizing & {
  ref: RefObject<SVGSVGElement>;
};

export type CryptoObject = {
  name: string;
  value: number;
  r?: number;
  children?: CryptoObject[];
};

export type CSMMapData = {
  name: string;
  value?: number | string;
  id?: number | string;
  children: CryptoObject[];
}[];

export type SimulationNode = {
  data: CryptoObject;
  r: number;
  x: number;
  y: number;
  nodes: SimulationNodeDatumRadial[];
};

export type SimulationNodeDatumRadial = SimulationNodeDatum & {
  r: number;
  x: number;
  y: number;
  nodes: SimulationNode[];
  key: string;
  index?: number;
};

export type CategoryPacksType = {
  svg: Selection<SVGSVGElement | null, unknown, null, undefined>;
  nodes: SimulationNodeDatumRadial[];
};

export type CirclesSimulation = Sizing & {
  nodes: SimulationNodeDatumRadial[];
};
