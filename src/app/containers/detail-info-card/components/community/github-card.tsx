import { useMemo } from 'react';

import { GithubIcon } from 'assets';

import { GithubNetwork } from '../../types';
import { InfoItem } from './info-item';
import { DoubleCardWrapper, DoubleCardContent, IconWrapper, InfoWrapper, StyledInfo } from './styles';

interface GithubStatisticProps {
  id: string;
  unit: string;
  count: number;
}

const unitsList = {
  stars: 'Stars',
  contributors: 'Contributors',
  followers: 'Followers',
  closeIssues: 'Closed Issues',
};

const getGithubStatistics = (statistics: Record<keyof typeof unitsList, number>) => {
  const result = Object.entries(statistics).reduce<GithubStatisticProps[]>((sum, current) => {
    const [key, value] = current as [keyof typeof unitsList, number];
    sum.push({ id: key, unit: unitsList[key], count: value });
    return sum;
  }, []);

  return result;
};

export const GithubCard = ({ repositories = [], ...rest }: GithubNetwork) => {
  const githubStatistics = useMemo(() => getGithubStatistics(rest), [rest]);
  const link = repositories[0] ?? '';
  return (
    <DoubleCardWrapper href={link} target="_blank">
      <DoubleCardContent>
        <IconWrapper>
          <GithubIcon />
        </IconWrapper>
        <InfoWrapper>
          {githubStatistics?.map(({ id, count, unit }) => (
            <StyledInfo key={id}>
              <InfoItem count={count} unit={unit} />
            </StyledInfo>
          ))}
        </InfoWrapper>
      </DoubleCardContent>
    </DoubleCardWrapper>
  );
};
