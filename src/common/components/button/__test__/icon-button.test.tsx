import { ButtonProps } from '@mui/material';
import { render } from '@testing-library/react';

import { IconButton } from '../icon-button';

const props: ButtonProps[] = [
  {
    size: 'small',
    variant: 'contained',
  },
  {
    size: 'medium',
    variant: 'outlined',
  },
  {
    size: 'large',
    variant: 'text',
  },
];

const Ico = () => (
  <svg height="100" width="100">
    <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
  </svg>
);

describe('<Button />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <>
        {props.map(item => (
          <IconButton {...item} key={item.variant}>
            <Ico />
          </IconButton>
        ))}
      </>
    );
    expect(container).toMatchSnapshot();
  });
  it('should be defined', () => {
    const { container } = render(
      <>
        {props.map(item => (
          <IconButton {...item} key={item.variant}>
            <Ico />
          </IconButton>
        ))}
      </>
    );

    expect(container).toBeDefined();
  });
});
