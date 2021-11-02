import { render } from '@testing-library/react';

import { Refferal } from '../refferal';

describe('<Refferal />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Refferal percent={5} radius={70} text="Test" />);
    expect(container).toMatchSnapshot();
  });
  it('should be defined', () => {
    const { container } = render(<Refferal percent={100} radius={80} text="Test" />);
    expect(container).toBeDefined();
  });
});
