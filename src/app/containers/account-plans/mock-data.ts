import { AccountPlan } from './types';

export const mockPlans: Omit<AccountPlan, 'selectedPlan'>[] = [
  {
    name: 'Free version',
    price: 'Free',
    properties: {
      visualization: {
        displayName: 'Visualization',
        properties: [
          { name: 'Mcap', isAllowed: true },
          { name: 'Categories', isAllowed: true },
          { name: 'General market stats', isAllowed: true },
          { name: 'Gainers / losers', isAllowed: true },
          { name: 'Partnerships with crypto projects', isAllowed: false },
          { name: 'Partnership with non-crypto', isAllowed: false },
          { name: 'Funds', isAllowed: false },
        ],
      },
      detailInfo: {
        displayName: 'Detailed info about the project',
        properties: [
          { name: 'Overview', isAllowed: true },
          { name: 'Events', isAllowed: true },
          { name: 'Community stats', isAllowed: true },
          { name: 'Social', isAllowed: true },
          { name: 'Partnerships with crypto projects', isAllowed: false },
          { name: 'Partnership with non-crypto', isAllowed: false },
          { name: 'Funds', isAllowed: false },
        ],
      },
      filters: {
        displayName: 'Filters',
        properties: [
          { name: 'Mcap', isAllowed: true },
          { name: 'Trading volume', isAllowed: true },
          { name: 'Exchanges', isAllowed: false },
          { name: 'Circ supply', isAllowed: false },
        ],
      },
      advanced: {
        displayName: 'Advanced',
        properties: [
          { name: 'Mcap', isAllowed: true },
          { name: 'Trading volume', isAllowed: false },
          { name: 'Circ supply', isAllowed: false },
        ],
      },
    },
  },
  {
    name: 'Basic plan',
    price: '$20 / month',
    properties: {
      visualization: {
        displayName: 'Visualization',
        properties: [
          { name: 'Mcap', isAllowed: true },
          { name: 'Categories', isAllowed: true },
          { name: 'General market stats', isAllowed: true },
          { name: 'Gainers / losers', isAllowed: true },
          { name: 'Partnerships with crypto projects', isAllowed: true },
          { name: 'Partnership with non-crypto', isAllowed: true },
          { name: 'Funds', isAllowed: false },
        ],
      },
      detailInfo: {
        displayName: 'Detailed info about the project',
        properties: [
          { name: 'Overview', isAllowed: true },
          { name: 'Events', isAllowed: true },
          { name: 'Community stats', isAllowed: true },
          { name: 'Social', isAllowed: true },
          { name: 'Partnerships with crypto projects', isAllowed: true },
          { name: 'Partnership with non-crypto', isAllowed: false },
          { name: 'Funds', isAllowed: false },
        ],
      },
      filters: {
        displayName: 'Filters',
        properties: [
          { name: 'Mcap', isAllowed: true },
          { name: 'Trading volume', isAllowed: true },
          { name: 'Exchanges', isAllowed: true },
          { name: 'Circ supply', isAllowed: true },
        ],
      },
      advanced: {
        displayName: 'Advanced',
        properties: [
          { name: 'Mcap', isAllowed: true },
          { name: 'Trading volume', isAllowed: true },
          { name: 'Circ supply', isAllowed: false },
        ],
      },
    },
  },
  {
    name: 'Pro plan',
    price: '$30 / month',
    properties: {
      visualization: {
        displayName: 'Visualization',
        properties: [
          { name: 'Mcap', isAllowed: true },
          { name: 'Categories', isAllowed: true },
          { name: 'General market stats', isAllowed: true },
          { name: 'Gainers / losers', isAllowed: true },
          { name: 'Partnerships with crypto projects', isAllowed: true },
          { name: 'Partnership with non-crypto', isAllowed: true },
          { name: 'Funds', isAllowed: true },
        ],
      },
      detailInfo: {
        displayName: 'Detailed info about the project',
        properties: [
          { name: 'Overview', isAllowed: true },
          { name: 'Events', isAllowed: true },
          { name: 'Community stats', isAllowed: true },
          { name: 'Social', isAllowed: true },
          { name: 'Partnerships with crypto projects', isAllowed: true },
          { name: 'Partnership with non-crypto', isAllowed: true },
          { name: 'Funds', isAllowed: true },
        ],
      },
      filters: {
        displayName: 'Filters',
        properties: [
          { name: 'Mcap', isAllowed: true },
          { name: 'Trading volume', isAllowed: true },
          { name: 'Exchanges', isAllowed: true },
          { name: 'Circ supply', isAllowed: true },
        ],
      },
      advanced: {
        displayName: 'Advanced',
        properties: [
          { name: 'Mcap', isAllowed: true },
          { name: 'Trading volume', isAllowed: true },
          { name: 'Circ supply', isAllowed: true },
        ],
      },
    },
  },
];
