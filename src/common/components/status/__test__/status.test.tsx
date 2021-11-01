import { render } from '@testing-library/react';

import { StatusProps } from '..';
import { Status } from '../status';

const props: StatusProps[] = [
  {
    size: 'l',
    variant: 'contained',
    text: 'contained',
  },
  {
    size: 'm',
    variant: 'outlined',
    text: 'outlined',
  },
  {
    size: 's',
    variant: 'text',
    text: 'text',
  },
];

describe('<Status />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <>
        {props.map(item => (
          <Status {...item} key={item.variant} />
        ))}
      </>
    );
    expect(container).toMatchSnapshot();
  });
  it('should be defined', () => {
    const { container } = render(
      <>
        {props.map(item => (
          <Status {...item} key={item.variant} />
        ))}
      </>
    );
    expect(container).toBeDefined();
  });
});
