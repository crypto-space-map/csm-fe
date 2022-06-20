import { RefObject } from 'react';

import { Selection, SimulationNodeDatum, HierarchyCircularNode, PackCircle, BaseType } from 'd3';

import { MapCategory, ExchangesType } from 'app/containers/space-map/types';

export type Sizing = {
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
  exchanges?: ExchangesType[];
  maxMarketCap: number;
  minMarketCap: number;
  projectPartnerships: string[];
  fetchPartnershipsData: (val: string) => void;
  setProject: (val: HierarchyCircularNode<PackedCategories>) => void;
};

export type CirclesSimulation = Sizing & {
  packedCategories: PackedNodes[];
};

export type PackedCategories = PackCircle & {
  key?: string;
  children: HierarchyCircularNode<PackedCategories>[];
  data: MapCategory & PackCircle;
  parent: PackedCategories | null;
  marketCap: number;
  namePathData: string;
} & Omit<MapCategory, 'children'>;

//  Project links generator

export type ProjectsLinksGeneratorProps = {
  svg: Selection<BaseType, unknown, null, undefined>;
  foundedProjects: HierarchyCircularNode<PackedCategories>[];
};

//  useChart

export type UseChartProps = {
  width?: number;
  height?: number;
  tree: MapCategory[] | null;
  maxMarketCap: number | null;
  minMarketCap: number | null;
};

export type PackedNodes = PackCircle & {
  key: string;
  r: number;
  sortingNumber: number;
  namePathData: string;
  children: ({
    data: MapCategory;
    r: number;
    id: string;
    name: string;
    children: MapCategory[];
    marketCap: number;
  } & PackCircle)[];
};

export type GAreaProps = {
  data: HierarchyCircularNode<PackedCategories>[] | undefined;
  currentProject?: HierarchyCircularNode<PackedCategories> | null;
  selectedProjects?: HierarchyCircularNode<PackedCategories>[] | undefined;
  setCurrentProject?: (value: HierarchyCircularNode<PackedCategories> | null) => void;
  handleSelectFund?: (val: string) => void;
  scale?: number;
  onProjectClick?: (value: HierarchyCircularNode<PackedCategories>) => void;
  opacityList?: Record<string, boolean>;
};
