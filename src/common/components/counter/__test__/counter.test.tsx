import { render } from '@testing-library/react';

import { Counter } from '..';

describe('<Counter />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Counter>11</Counter>);
    expect(container).toMatchSnapshot();
  });
  it('should be defined', () => {
    const { container } = render(<Counter>12</Counter>);
    expect(container).toBeDefined();
  });
});
