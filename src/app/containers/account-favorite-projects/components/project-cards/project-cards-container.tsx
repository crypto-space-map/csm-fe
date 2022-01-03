import { useState } from 'react';

import { ContainerOverflow } from 'app/containers/account/components/action-block/styled';

import { FavoriteProject } from '../../types';
import { ProjectCard } from './project-card';
import { StyledProjectCardContainer } from './styled';

const data: FavoriteProject[] = [
  {
    name: 'Robonomics Network 1',
    symbol: 'XRT',
    tags: ['IoT', 'Telecommunication'],
    dayChange: '-13.55',
    weekChange: '10.01',
    liked: true,
  },
  {
    name: 'Robonomics Network 2',
    symbol: 'XRT',
    tags: ['IoT', 'Telecommunication'],
    dayChange: '-13.55',
    weekChange: '10.01',
    liked: true,
  },
  {
    name: 'Robonomics Network 3',
    symbol: 'XRT',
    tags: ['IoT', 'Telecommunication'],
    dayChange: '-13.55',
    weekChange: '10.01',
    liked: false,
  },
  {
    name: 'Robonomics Network 4',
    symbol: 'XRT',
    tags: ['IoT', 'Telecommunication'],
    dayChange: '-13.55',
    weekChange: '10.01',
    liked: true,
  },
  {
    name: 'Robonomics Network',
    symbol: 'XRT',
    tags: ['IoT', 'Telecommunication'],
    dayChange: '-13.55',
    weekChange: '10.01',
    liked: true,
  },
  {
    name: 'Robonomics Network 5',
    symbol: 'XRT',
    tags: ['IoT', 'Telecommunication'],
    dayChange: '-13.55',
    weekChange: '10.01',
    liked: true,
  },
  {
    name: 'Robonomics Network 6',
    symbol: 'XRT',
    tags: ['IoT', 'Telecommunication'],
    dayChange: '-13.55',
    weekChange: '10.01',
    liked: false,
  },
  {
    name: 'Robonomics Network 7',
    symbol: 'XRT',
    tags: ['IoT', 'Telecommunication'],
    dayChange: '-13.55',
    weekChange: '10.01',
    liked: true,
  },
  {
    name: 'Robonomics Network 8',
    symbol: 'XRT',
    tags: ['IoT', 'Telecommunication'],
    dayChange: '-13.55',
    weekChange: '10.01',
    liked: true,
  },
  {
    name: 'Robonomics Network',
    symbol: 'XRT',
    tags: ['IoT', 'Telecommunication'],
    dayChange: '-13.55',
    weekChange: '10.01',
    liked: false,
  },
  {
    name: 'Robonomics Network 9',
    symbol: 'XRT',
    tags: ['IoT', 'Telecommunication'],
    dayChange: '-13.55',
    weekChange: '10.01',
    liked: true,
  },
  {
    name: 'Robonomics Network 10',
    symbol: 'XRT',
    tags: ['IoT', 'Telecommunication'],
    dayChange: '-13.55',
    weekChange: '10.01',
    liked: false,
  },
  {
    name: 'Draco II EVM Launch',
    symbol: 'BNB',
    tags: ['Telecommunication', 'IoT'],
    dayChange: '99.55',
    weekChange: '-10.02',
    liked: true,
  },
  {
    name: 'Polkadot ecosystem',
    symbol: 'BTC',
    tags: [
      'ecosystem',
      'Telecommunication IoT',
      'Telecommun',
      'Telecommunication',
      'vTelecommun',
      'Telecommunication',
      'asddasdas',
      'IoT',
    ],
    dayChange: '-3.55',
    weekChange: '20.11',
    liked: false,
  },
];

export const ProjectsCardContainer = () => {
  const [state, setState] = useState(data);
  // crutch for demo
  const onLikeClick = (name: string) =>
    setState(
      state.map(item => {
        if (item.name === name) return { ...item, liked: !item.liked };
        return item;
      })
    );
  return (
    <StyledProjectCardContainer>
      <ContainerOverflow>
        {state.map(project => (
          <ProjectCard {...project} key={project.name + project.symbol} onLikeClick={onLikeClick} />
        ))}
      </ContainerOverflow>
    </StyledProjectCardContainer>
  );
};
