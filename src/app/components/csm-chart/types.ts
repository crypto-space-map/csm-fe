import { RefObject } from 'react';

import { Selection, SimulationNodeDatum, PackCircle } from 'd3';

import { CSMMapCategory, Exchanges } from 'app/containers/space-map/types';

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
  nodes: PackedCategories[];
  fundsTooltip: Selection<HTMLDivElement, unknown, null, undefined>;
  mCapFrom?: number | null;
  mCapTo?: number | null;
  exchanges?: Exchanges[];
  maxMarketCap: number;
  minMarketCap: number;
  fetchPartnershipsData: (val: string) => void;
};

export type CirclesSimulation = Sizing & {
  nodes: PackedCategories[];
};

type CategoriesChild = {
  data: CSMMapCategory;
  r: number;
  id: string;
  name: string;
  children: CSMMapCategory[];
  marketCap: number;
};

export type PackedCategories = {
  key?: string;
  children: Array<CategoriesChild & PackCircle>;
  exchanges?: Exchanges[];
  data: CSMMapCategory;
  id: string;
  projectId?: string;
  name: string;
  marketCap: number;
  r: number;
  x: number;
  y: number;
};
