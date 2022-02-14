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
  persentVolume: number | null;
  updatedAt: string;
}

export interface InvestorsProps {
  id: string;
  name: string;
  website: string;
}

export interface FundsDTO {
  type: string;
  investors: InvestorsProps[];
  amount: number;
  date: string;
  announcement: string;
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
  id: string;
  text: string;
  link: string;
}

export interface SocialDataDTO {
  socialMediaType: number;
  accountName: string;
  accountUrl: string;
  accountImageUrl: string;
  createdAt: string;
  text: string;
  url: string;
  buttons?: ButtonsProps[];
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

export interface ProjectDataResponseDTO {
  name: string;
  symbol: string;
  icon: string;
  rank: number;
  marketPrice: CommonStatistic;
  priceChangePercentage: {
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
}

export interface DetailInfoState {
  exchangesData: ExchangeDTO[] | null;
  exchangesDataLoading: boolean;
  overviewTradingStockLoading: boolean;
  overviewTradingStock: string;
  exchangesPage: number;
  projectLoading: boolean;
  projectStatistic: StatisticDetailDataDTO | null;
  projectHeaderData: HeaderData | null;
  socialData: SocialDataDTO[] | null;
  socialDataLoading: boolean;
  fundsData: FundsDTO[] | null;
  fundsDataLoading: boolean;
}

export type ContainerState = DetailInfoState;
