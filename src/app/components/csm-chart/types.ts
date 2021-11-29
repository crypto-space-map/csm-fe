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
  marketCap: number;
  r?: number;
  children?: CryptoObject[];
};

export type CSMMapData = {
  name: string;
  marketCap?: number | string;
  id?: number | string;
  children: CryptoObject[];
}[];

export type SimulationNode = {
  data: CryptoObject;
  marketCap: number;
  r: number;
  x: number;
  y: number;
  nodes: SimulationNodeDatumRadial[];
};

export type SimulationNodeDatumRadial = SimulationNodeDatum &
  PackType &
  CryptoObject &
  SimulationNode & {
    children: SimulationNodeDatumRadial[];
    key: string;
    marketCap: number;
    index?: number;
    data: CryptoObject;
  };

export type CategoryPacksType = {
  svg: Selection<SVGSVGElement | null, unknown, null, undefined>;
  nodes: SimulationNodeDatumRadial[];
  fundsTooltip: Selection<HTMLDivElement, unknown, null, undefined>;
};

export type CirclesSimulation = Sizing & {
  nodes: SimulationNodeDatumRadial[];
};
