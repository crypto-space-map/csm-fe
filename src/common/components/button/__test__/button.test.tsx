import { ButtonProps } from '@mui/material';
import { render } from '@testing-library/react';

import { Button } from '../button';

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

describe('<Button />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <>
        {props.map(item => (
          <Button {...item} key={item.variant} />
        ))}
      </>
    );
    expect(container).toMatchSnapshot();
  });
  it('should be defined', () => {
    const { container } = render(
      <>
        {props.map(item => (
          <Button {...item} key={item.variant} />
        ))}
      </>
    );

    expect(container).toBeDefined();
  });
});
