import { FundsDTO } from 'types/dto';
import { FetchDataState } from 'utils/@reduxjs/fetchData';

export interface ExchangeRequest {
  page: number;
  projectName: string;
}
export interface ExchangeDTO {
  exchange: string;
  url: string;
  pair: string;
  price: number;
  volume: number;
  volumePercentage: number;
  updatedAt: string;
}

export interface EventsProps {
  title: string;
  description: string;
  date: string;
  proof: string;
  source: string;
  isToday: boolean;
  isBefore: boolean;
}
export interface EventsDTO {
  events: EventsProps[];
  icon: string;
}

interface CommonStatistic {
  usd: number;
  btc: number;
}

interface PercentageStatistic {
  value: number;
  percentage: number;
}

export interface HeaderData {
  name: string;
  symbol: string;
  icon: string;
  rank: number;
}

export interface ButtonsProps {
  text: string;
  link: string;
}

export interface CardProps {
  socialMediaType?: number;
  title?: string;
  titleUrl?: string;
  imageUrl?: string;
  createdAt: string;
  text: string;
  subTitleUrl?: string;
  proof?: string;
  source?: string;
  isToday?: boolean;
  isBefore?: boolean;
}

export interface SocialDataDTO {
  socialMediaType: number;
  accountName: string;
  accountUrl: string;
  accountImageUrl: string;
  createdAt: string;
  text: string;
  url: string;
}
export interface StatisticDetailDataDTO {
  marketPrice: CommonStatistic;
  priceChangePercentageDay: PercentageStatistic;
  priceChangePercentageWeek: PercentageStatistic;
  website: string;
  marketCap: CommonStatistic;
  totalVolume: CommonStatistic;
  supplyCirculating: PercentageStatistic;
  supplyTotal: PercentageStatistic;
}

export interface MaxVolumeExchangeProps {
  identifier: string;
  baseTicker: string;
  targetTicker: string;
}

export interface ProjectDataResponseDTO {
  category: string;
  description: string;
  explorers: string[];
  name: string;
  symbol: string;
  icon: string;
  rank: number;
  marketPrice: CommonStatistic;
  priceChange: {
    '24h': PercentageStatistic;
    '7d': PercentageStatistic;
  };
  website: string;
  marketCap: CommonStatistic;
  totalVolume: CommonStatistic;
  supply: {
    circulating: PercentageStatistic;
    total: PercentageStatistic;
  };
  maxVolumeExchange: MaxVolumeExchangeProps;
}

export interface SocialNetwork {
  url: string;
  count: number;
  type?: 1 | 2;
}
export interface GithubNetwork {
  repositories: string[];
  stars: number;
  contributors: number;
  followers: number;
  closeIssues: number;
}

export interface CommunityDTO {
  telegram: SocialNetwork[] | null;
  twitter: SocialNetwork | null;
  medium: SocialNetwork | null;
  discord: SocialNetwork | null;
  gitInfo: GithubNetwork | null;
}

export interface OverviewExtraDataProps {
  category: string;
  description: string;
  explorers: string[];
  maxVolumeExchange: MaxVolumeExchangeProps;
}

interface SocialData extends FetchDataState {
  data: SocialDataDTO[] | null;
}
interface ExchangesData extends FetchDataState {
  data: ExchangeDTO[] | null;
}

interface EventsData extends FetchDataState {
  data: EventsDTO | null;
}

interface CommunityData extends FetchDataState {
  data: CommunityDTO | null;
}

export interface DetailInfoState {
  exchangesData: ExchangesData;
  overviewExtraData: OverviewExtraDataProps | null;
  exchangesPage: number;
  projectLoading: boolean;
  projectStatistic: StatisticDetailDataDTO | null;
  projectHeaderData: HeaderData | null;
  socialData: SocialData;
  eventsData: EventsData;
  communityData: CommunityData;
}

export type ContainerState = DetailInfoState;
