import { RefObject } from 'react';

import { Selection, SimulationNodeDatum, HierarchyCircularNode, PackCircle, BaseType } from 'd3';

import { CSMMapCategory, Exchanges, Partnership } from 'app/containers/space-map/types';

type Sizing = {
  width: number;
  height: number;
};

export type PackType = Sizing & {
  data: CryptoObject /* Need to type it */;
};

export type BaseMapParams = {
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
  svg: Selection<BaseType, unknown, null, undefined>;
  nodes: PackedCategories[];
  fundsTooltip: Selection<BaseType, string, HTMLDivElement | null, unknown>;
  mCapFrom?: number | null;
  mCapTo?: number | null;
  exchanges?: Exchanges[];
  maxMarketCap: number;
  minMarketCap: number;
  projectPartnerships: string[] | null;
  fetchPartnershipsData: (val: string) => void;
  setProject: (val: HierarchyCircularNode<PackedCategories>) => void;
};

export type CirclesSimulation = Sizing & {
  packedCategories: PackedCategories[];
};

export type PackedCategories = Omit<CSMMapCategory, 'children'> &
  PackCircle & {
    key?: string;
    children: PackedCategories[];
    data: CSMMapCategory & PackCircle;
    parent: PackedCategories | null;
  };

//  Project links generator

export type ProjectsLinksGeneratorProps = {
  svg: Selection<BaseType, unknown, null, undefined>;
  nodes: HierarchyCircularNode<PackedCategories>[];
  projectPartnerships: Partnership['projectId'][] | null;
};

//  useChart

export type UseChartProps = {
  width?: number;
  height?: number;
  tree: CSMMapCategory[] | null;
  maxMarketCap: number | null;
};

export type PackedNodes = PackCircle & {
  key: string;
  children: ({
    data: CSMMapCategory;
    r: number;
    id: string;
    name: string;
    children: CSMMapCategory[];
    marketCap: number;
  } & PackCircle)[];
};
