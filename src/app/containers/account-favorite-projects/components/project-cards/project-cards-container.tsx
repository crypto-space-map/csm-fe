import { useState } from 'react';

import { FavoriteProject } from '../../types';
import { ProjectCard } from './project-card';
import { StyledProjectCardContainer } from './styled';

const data: FavoriteProject[] = [
  {
    name: 'Robonomics Network',
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
      {state.map(project => (
        <ProjectCard {...project} key={project.name + project.symbol} onLikeClick={onLikeClick} />
      ))}
    </StyledProjectCardContainer>
  );
};
